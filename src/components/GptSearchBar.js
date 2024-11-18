import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { addGptSearchMovies } from '../utils/gptSlice'

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchGptMovie = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    return json.results;
  }

  const handleGptSearchClick = async () => {
    const gptQuery = "Act as a Movie Recommendation Sysyem and suggest some movies for the query : " + searchText.current.value + "Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result : Sitharamam,Hi Nanna,Malli Rava,Yeh Jawani Hai Deewani,Shershaah";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if(!gptResults) return;

    console.log(gptResults.choices[0]?.message?.content);
    const gptMovies = gptResults.choices[0]?.message?.content.split(", ");
    console.log(gptMovies);

    const promiseArray = gptMovies.map((movie) => searchGptMovie(movie));  // array of promises
    const tmdbSearchResults = await Promise.all(promiseArray);
    console.log(tmdbSearchResults);
    dispatch(addGptSearchMovies({movieNames : gptMovies , movieResults : tmdbSearchResults}));
  }


  return (
    <div className='pt-32 flex justify-center'>
      <form className='bg-black w-1/2 grid grid-cols-12 rounded-lg' onSubmit = {(e) => e.preventDefault()}>
        <input ref={searchText} className='px-4 py-4 m-4 border-slate-700 col-span-10 rounded-lg' type='text' placeholder={lang[currentLang].gptSearchPlaceholder}></input>
        <button className="px-4 bg-red-600 col-span-2 m-2 my-4 text-white text-lg rounded-md" onClick={handleGptSearchClick}>{lang[currentLang].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar;