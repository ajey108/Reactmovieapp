import React from 'react';
import { useGlobalContext } from './context';

const Search = () => {
  const { search, setSearch, Error } = useGlobalContext();

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-gray-900 shadow z-10">
        <form className="text-center" action="#" onSubmit={(e) => e.preventDefault()}>
          <div className="flex justify-center items-center m-2 p-2 md:p-3">
            <label htmlFor="movieSearch" className="sr-only">Search Movie</label>
            <span className="text-xl md:text-4xl font-thin text-yellow-500 mr-2 md:mr-4">IMDB</span>
            <input
              id="movieSearch"
              className="rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-sm md:text-base"
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
      <div className="h-16 sm:h-18 md:h-20 lg:h-24 xl:h-28"></div> {/* Placeholder to prevent content from being obscured by fixed navbar */}
    </>
  );
};

export default Search;
