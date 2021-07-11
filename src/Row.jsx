import axios from './axios'
import React, { useState, useEffect } from 'react'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
const base_url = 'https://image.tmdb.org/t/p/original/'
function Row(props) {
    const [movies, setMovies] = useState([])

    //This code inside useffect hook will only run when specific condition is true
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchurl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [props.fetchurl])

    const opts = {
        height:'390',
        width:'100%',
        playerVars:{
            autoplay:1,
        },
    }
    const [trailerUrl, setTrailerUrl] = useState('')
    const handleClick = (movie) =>{
        if(trailerUrl){
            setTrailerUrl('')
        }
        else{
            movieTrailer(movie?.title||movie?.original_name||movie?.name).then((url)=>{
            const urlParams = new URLSearchParams(new URL(url).search)
               setTrailerUrl(urlParams.get('v'))
            }).catch((error)=>{console.log(error)})
        }
    }

    console.log(movies)
    return (
        <div className='row'>
                <h1>{props.title}</h1>
                <div className="row_posters">
                {movies.map((movie) => (                
                    <img key={movie.id} onClick={()=>{handleClick(movie)}} className={`row_poster ${props.isLargeRow && "row_posterLarge"}`} src={`${base_url}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />   
                ))}
            </div>
           {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}
export default Row