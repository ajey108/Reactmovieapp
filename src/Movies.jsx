import React from 'react'
import { useGlobalContext } from './context'
 import './Movies.css';
import { NavLink } from 'react-router-dom';

const Movies = () => {
    const {movie} = useGlobalContext();
 
  return (
   <>
   <section className='movie-page'>
    
   
  
   {movie.map((currentMovie)=>{
    const {imdbID,Title,Poster,Year}= currentMovie;

    const movieName =Title.substring(0,15);
    return <NavLink  key={imdbID} to={`movie/${imdbID}`}>

      <div className='card'>
        <h2>{movieName.length >= 15 ? `${movieName} ...` : movieName} </h2>
      <img src={Poster} />
      <h1>{Year}</h1>
      </div>
    </NavLink>;

   })}

</section>
   </>
  )
}

export default Movies