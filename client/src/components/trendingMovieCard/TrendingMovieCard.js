import React from 'react'
import './TrendingMovieCard.css'

const TrendingMovieCard = (data) => {

    console.log("movie card" , data.data.original_title);
    const url = "http://image.tmdb.org/t/p/w500/"
    const res = data.data;
  return (
    <>
    <div>
        <div className='img-cont'>
        <img src={`${url}`+res.poster_path} alt={res.original_title} height="200px" width="200px"/>
        </div>
        <div className='title-cont'>
            {data.data.original_title}
        </div>
    </div>
    </>
  )
}

export default TrendingMovieCard