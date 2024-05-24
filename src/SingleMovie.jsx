import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { API_URL } from './context';

const SingleMovie = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    const getMovie = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.Response === "True") {
                setMovie(data);
                setIsLoading(false);
            } else {
                setError(data.Error);
                setIsLoading(false);
            }
        } catch (error) {
            setError("An error occurred while fetching the data.");
            setIsLoading(false);
        }
    };

    useEffect(() => {
        let timer = setTimeout(() => {
            getMovie(`${API_URL}&i=${id}`);
        }, 1000);

        return () => clearTimeout(timer);
    }, [id]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-xl font-semibold">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="text-xl font-semibold text-red-500">{error}</div>
                <NavLink className="mt-4 text-blue-500 underline" to="/">Go Back</NavLink>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
            <div className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="md:w-1/3 w-full">
                    <img className="w-full h-auto object-cover" src={movie.Poster} alt={movie.Title} />
                </div>
                <div className="md:w-2/3 w-full p-4">
                    <h2 className="text-2xl text-red-900 font-bold mb-2">{movie.Title}</h2>
                    <p className="mb-2"><span className="font-semibold">Released:</span> {movie.Released}</p>
                    <p className="mb-2"><span className="font-semibold">Rating:</span> {movie.imdbRating}</p>
                    <p className="mb-2"><span className="font-semibold">Country:</span> {movie.Country}</p>
                    <NavLink className="mt-4 inline-block text-blue-500 underline" to="/">Go Back</NavLink>
                </div>
            </div>
        </div>
    );
};

export default SingleMovie;
