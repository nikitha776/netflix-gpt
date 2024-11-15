import React from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

const Body = () => {

  // const appRouter = createBrowserRouter([
  //   {
  //     path : '/',
  //     element: <Login/>
  //   },
  //   {
  //     path : '/browse',
  //     element : <Browse/>
  //   }
  // ]);

  const appRouter = createBrowserRouter(
    [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/browse',
        element: <Browse />
      }
    ],
    {
      future: {
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
        v7_startTransition: true
      }
    }
  );
  
 
  return (
    <div>
        <RouterProvider router = {appRouter} />
    </div>
  )
}

export default Body