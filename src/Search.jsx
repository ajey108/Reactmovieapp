import React from 'react'
import './Search.css'
import { useGlobalContext } from './context'

const Search = () => {
  const  {search,setSearch,Error} = useGlobalContext();
  return (
   <>
   <form action="#" onSubmit={(e)=>e.preventDefault()}>
   <div className='input-box'>
    <span>IMDB</span><input type="text" placeholder='Search movie' value={search} onChange={(e)=>setSearch(e.target.value)}/>
   </div>

   </form>

   <p>{Error.show&&Error.msg}</p>
  
   </>
  )
}

export default Search