import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom';

const Movies = () => {
    const {movie} = useGlobalContext();
 
  return (
   <>
   <section className='flex flex-wrap items-center justify-around mb-10 text-center h-screen'>
    
   
  
   {movie.map((currentMovie)=>{
    const {imdbID,Title,Poster,Year}= currentMovie;

    const movieName =Title.substring(0,15);
    return <NavLink  key={imdbID} to={`movie/${imdbID}`}>

      <div className='w-80 border border-white p-2 text-white m-10'>
        <h2>{movieName.length >= 15 ? `${movieName} ...` : movieName} </h2>
      <img className="w-full" src={Poster} />
      <h1>{Year}</h1>
      </div>
    </NavLink>;

   })}

</section>
   </>
  )
}

export default Movies