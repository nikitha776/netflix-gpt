import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const currentLang = useSelector((store) => store.config.lang);
  return (
    <div className='pt-32 flex justify-center'>
      <form className='bg-black w-1/2 grid grid-cols-12 rounded-md'>
        <input className='px-4 py-4 m-4 border-slate-700 col-span-10' type='text' placeholder={lang[currentLang].gptSearchPlaceholder}></input>
        <button className="px-4 bg-red-600 col-span-2 m-2 my-4 text-white text-lg rounded-md">{lang[currentLang].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar;