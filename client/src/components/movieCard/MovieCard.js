import React from 'react'
import "./MovieCard.css"
import { useNavigate } from 'react-router-dom';

const MovieCard = (data) => {

    const navigate = useNavigate();

    function reviews(params){
        navigate(`/Reviews/${params}`);
    }

    // console.log("this is the data" , data);
    const det = data.data;
  return (
    <>
    <div className='movie-card-outer-cont'>
    
    <div className='movie-card-cont' onClick={() => reviews(det.imdbId)}>
    <img src={det.poster} alt={det.title}/>
    </div>  
    <div style={{textAlign:'center'}}>{det.title}</div>

    </div>
    </>
  )
}

export default MovieCard