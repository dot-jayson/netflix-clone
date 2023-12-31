import axios from 'axios'
import { useEffect, useState } from 'react'
import requests from '../Requests'

const Hero = () => {

    // State to store the movies we fetch from API
    const [movies, setMovies] = useState([])

    // Pick out a random movie from the array of movies
    const movie = movies[Math.floor(Math.random() * movies.length)]

    // axios get request, fetching data from API
    useEffect(() => {
        axios.get(requests.requestPopular)
            .then((response) => {
                setMovies(response.data.results)
            })
    }, [])
    // console.log(movie);

    const truncateString = (string, number) => {
        if (string?.length > number) {
            return string.slice(0, number) + '...'
        } else {
            return string
        }
    }

    return (

        <div className='w-full h-[550px] text-white'>

            <div className='w-full h-full'>
                {/* Add a gradient */}
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black' />
                {/* Movie image */}
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />

                {/* Container for movie info and buttons */}
                <div className='absolute w-full top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                    <div className='my-4'>
                        <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                        <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
                    </div>

                    <p className='text-gray-400 text-sm'>
                        Released: {movie?.release_date}
                    </p>

                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
                        {truncateString(movie?.overview, 150)}
                    </p>

                </div>


            </div>
        </div>
    )
}

export default Hero