import React from 'react'
import Hero from '../Hero'
import Row from '../Row'
import requests from '../../Requests'


const Home = () => {


    return (
        <>

            <Hero />
            {/* Passing each fetch URL and title to corresponding row */}
            <Row
                rowId='1'
                title='Upcoming'
                fetchURL={requests.requestUpcoming}
            />
            <Row
                rowId='2'
                title='Popular'
                fetchURL={requests.requestPopular}
            />
            <Row
                rowId='3'
                title='Trending'
                fetchURL={requests.requestTrending}
            />
            <Row
                rowId='4'
                title='Top Rated'
                fetchURL={requests.requestTopRated}
            />
            <Row
                rowId='5'
                title='Anime'
                fetchURL={requests.requestAnime}
            />

        </>
    )
}

export default Home