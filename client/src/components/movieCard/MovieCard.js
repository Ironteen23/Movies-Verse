import React from 'react'
import "./MovieCard.css"

const MovieCard = (data) => {

    // console.log("this is the data" , data);
    const det = data.data;
  return (
    <>
    <div>
    <div className='movie-card-cont'>
    <img src={det.poster} alt={det.title}/>
    </div>  
    <div>{det.title}</div>

    </div>
    </>
  )
}

export default MovieCard