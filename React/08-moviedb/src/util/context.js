import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
// export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
import useFetch from './useFetch'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // const [isLoading, setIsLoading] = useState(true)
  // const [error, setError] = useState({ show: false, msg: '' })
  // const [movies, setMovies] = useState([])
  
  //kho is a good example of no photo available
  //batman is a good example of working
  const [query, setQuery] = useState('kho')
  const {data:movies, error, isLoading} = useFetch(`&s=${query}`)

  // const fetchMovies = async (url)=> {
  //   setisLoading(true)
  //   try{
  //     const response = await fetch(url);
  //     const data = await response.json()
  //     if(data.Response==='True'){
  //       setMovies(data.Search)
  //       setError({ show: false, msg: '' })
  //       console.log(movies);
  //     }
  //     else{
  //       console.log(error);
  //       setError({ show: true, msg: data.Error })
  //     }
  //     console.log(data);
  //     setIsLoading(false)
  //   }
  //   catch(error){
  //     console.log(error);
  //   }
    
  // }
  
  // useEffect(() => {
  //   fetchMovies(`${API_ENDPOINT}&s=${query}`)
  // }, [query])

  return <AppContext.Provider value={{
    isLoading, movies, error, query, setQuery
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
