import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  const  {search,setSearch,Error} = useGlobalContext();
  return (
   <>
   <form className="text-center" action="#" onSubmit={(e)=>e.preventDefault()}>
   <div className='flex text-center m-2 p-3 '>
    <span className='text-4xl font-thin text-yellow-500 mr-4'>IMDB</span>
    <input className='rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none'  type="text" placeholder='Search movie' value={search} onChange={(e)=>setSearch(e.target.value)}/>
   </div>

   </form>

   <p className='text-center m-2 text-gray-500 text-lg'>{Error.show&&Error.msg}</p>
  
   </>
  )
}

export default Search