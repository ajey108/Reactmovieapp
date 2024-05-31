import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom';

const Movies = () => {
    const { movie } = useGlobalContext();
 
    return (
        <>
            <section className='flex items-center flex-wrap justify-around mb-10 text-center'>
                {movie.map((currentMovie) => {
                    const { imdbID, Title, Poster, Year } = currentMovie;

                    const movieName = Title.substring(0, 15);
                    return (
                        <NavLink key={imdbID} to={`movie/${imdbID}`}>
                            <div className='w-80 m-4'>
                                <div className='border border-white p-2 text-white'>
                                    <h2>{movieName.length >= 15 ? `${movieName} ...` : movieName}</h2>
                                    <img className="w-full" src={Poster} alt={Title} />
                                    <h1>{Year}</h1>
                                </div>
                            </div>
                        </NavLink>
                    );
                })}
            </section>
        </>
    )
}

export default Movies
