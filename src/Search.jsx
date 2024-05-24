import React from 'react';
import { useGlobalContext } from './context';

const Search = () => {
  const { search, setSearch, Error } = useGlobalContext();

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white shadow z-10">
        <form className="text-center" action="#" onSubmit={(e) => e.preventDefault()}>
          <div className="flex justify-center items-center m-2 p-2 md:p-3">
            <label htmlFor="movieSearch" className="sr-only">Search Movie</label>
            <span className="text-xl md:text-4xl font-thin text-yellow-500 mr-2 md:mr-4">IMDB</span>
            <input
              id="movieSearch"
              className="rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none w-full md:w-64 px-2 md:px-4 py-1 md:py-2 text-sm md:text-base"
              type="text"
              placeholder="Search movie"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
        {Error.show && (
          <p className="text-center m-2 text-gray-500 text-sm md:text-lg">{Error.msg}</p>
        )}
      </div>
      <div className="h-16 md:h-20"></div> {/* Placeholder to prevent content from being obscured by fixed navbar */}
    </>
  );
};

export default Search;

