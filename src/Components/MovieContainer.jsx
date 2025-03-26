import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const MovieContainer = () => {

    const movie = useSelector(store => store.movie);
    

  return (
    <div className='bg-black'>
        <div  className='md:-mt-90 -mt-14 md:bg-transparent bg-black  relative z-10'>

        <MovieList title={"Popular Movie"} movies={movie.popularMovies}/>
        <MovieList title={"Top Rated Movie"} movies={movie.topRatedMovies}/>
        <MovieList title={"Now Playing Movie"} movies={movie.nowPlayingMovies}/>
        <MovieList title={"Upcoming Movie"} movies={movie.upcomingMovies}/>
        </div>
    </div>
  )
}

export default MovieContainer