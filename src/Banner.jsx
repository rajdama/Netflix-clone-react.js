import axios from './axios'
import React,{useState,useEffect} from 'react'
import requests from './requests'
import './banner.css'
function Banner() {
    const [movie, setMovie] = useState([])
    
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[Math.floor(Math.random()*request.data.results.length-1)]
            )
        }
        fetchData()
    }, [])
    console.log(movie)  
    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"...":str;
    }
    return (
        <header style={{
            backgroundSize:'cover',
            backgroundPosition:'center center',
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}} className="banner">
            <div className="banner_contents">
            <h1 className='banner_title'>{movie?.title||movie?.name||movie?.original_name}</h1>
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className='banner_description' >{truncate(movie?.overview,150)}</h1>
            </div>
            <div className='banner_fadeBottom'/>
        </header>
    )
}

export default Banner
