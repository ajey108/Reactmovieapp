import React, { useContext, useEffect, useState } from "react";
import { children } from "react";


export const API_URL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`;



const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [isLoading,setIsLoading] = useState(true);

    const [movie,setMovie]=useState([]);

    const [Error,setError]=useState({show:false,msg:""});

    // Search functionality

    const  [search,setSearch]=useState('X men');


    const getmovies =async(url)=>{

        setIsLoading(true);
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === "True"){
                setIsLoading(false);

                setError({
                    show: false,
                    msg: null
                })
                setMovie(data.Search);
            }

            else{
                setError({
                    show: true,
                    msg: data.Error
                })
            }
        } 
        catch(error){console.log(error)}

    }

    useEffect(()=>{
        
        let timer = setTimeout(()=>{
         getmovies(`${API_URL}&s=${search}`);
        },1000);

     return ()=> clearTimeout(timer);
     
       
    },[search])
    return <AppContext.Provider value= {{isLoading,Error,movie,search,setSearch}}>{children}</AppContext.Provider>;

}

//custom hook

const useGlobalContext =()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext};