import React, { useEffect, useState } from 'react';
import { useParams,NavLink } from 'react-router-dom';
import { API_URL } from './context';
import './singlemovie.css'

const SingleMovie = () => {

    const { id } = useParams();
    const [isLoading, setIsLoading ,] = useState(true);

    const [movie, setMovie] = useState('');
 
    const getmovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data);
            }

        }
        catch (error) { console.log(error) }

    }

    useEffect(() => {

        let timer = setTimeout(() => {
            getmovies(`${API_URL}&i=${id}`);
        }, 1000);

        return () => clearTimeout(timer);


    }, [id]);

    if(isLoading){
        return(
            <div className="movies-section">
                <div className="loading">Loading...</div>
            </div>
        )
    }

    return(
       
      <div className="movie-section">
        <div className="movie-card">
        <div className="movie-img">
        <img src={movie.Poster}  />
        </div>
        <div className="movie-info">
            <p>Title: {movie.Title}</p>
           
            <p>Date: {movie.Released}</p>
            <p>Rating: {movie.imdbRating}</p>
            <p>Origin :{movie.Country}</p>

            <NavLink className="back" to="/">GoBack</NavLink>  
         
        
        </div>
        </div>
     
      </div>
        
    )

};

export default SingleMovie;
