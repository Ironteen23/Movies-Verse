import React, { useEffect } from 'react'
import "./Hero.css"
import Carousel from 'react-material-ui-carousel'
import { useState } from 'react'
import { Paper } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Link , useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import api from "../../api/axiosConfig";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MovieCard from '../movieCard/MovieCard'
import Genre from '../genre/Genre'


const Hero = ({movies}) => {

    const navigate = useNavigate();
    const user = useSelector((state)=>state.user.value);
    const [show,setShow] = useState(false);
    const [render,setRender] = useState(false);
    let updatedArr = movies;
    const genres = ["Fantasy" , "Action" , "Science Fiction" ,"Horror" ,"Animation" ,"Family" , "Adventure"];

    function reviews(movieId)
    {
        navigate(`/Reviews/${movieId}`);
    }

    // useEffect(()=>{

    // },[updatedArr]);

    const handleGenreClick = (genre)=>{
        console.log("Clciked");
        const arr = movies;
        updatedArr = [];
        arr.map((movie)=>{

            movie.genres.map((i)=>{
                if(i===genre)
                updatedArr.push(movie);
            });
        })
        
        console.log(updatedArr,"THIS IS ARR");
    }

    const addFav = async(movieId)=>{

        try {
                const fav = {name:user.name , imdb:movieId };
              const res = await  api.post("/api/v1/users/addFav" , fav);

              console.log("what up " , res);

              if(res.status === 200)
              {
                toast.success("Added to Fav ", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });

                  setShow(true);
              }


        } catch (error) {
            console.log(error);
        }

    }

  return (
    <>
        <div className="movie-carousel-container">
        <Carousel>
            {
                movies?.map((movie,i)=>{
                    return <Paper key={i}>
                        <div className="movie-card-container">
                        <div className="movie-card"  style={{"--img":`url(${movie.backdrops[0]})`}}>
                            <div className="movie-detail">
                                <div className="movie-poster">
                                    <img src={movie.poster} alt={movie.title}/>
                                </div> 
                                <div className="movie-title">
                                    <h4>{movie.title}</h4>
                                </div>
                                <div className='movie-buttons-container'>

                                    <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                   <div className='play-button-icon-container'>
                                    <FontAwesomeIcon className='play-button-icon' icon={faCirclePlay}/>
                                   </div>
                                    </Link>

                                    <div className="movie-review-button-container">
                                            <Button variant ="info" onClick={() => reviews(movie.imdbId)} >Reviews</Button>
                                    </div>

                                    {
                                        user.isLoggedIn ? 
                                        <div className="movie-fav-button-container">
                                        <Button  variant ="info" onClick={() => addFav(movie.imdbId)} style={{width:"150px" , marginLeft:"10px"}}>Add to Fav</Button>
                                         </div>

                                        : null
                                    }

                                </div>

                            </div>
                            </div>
                        </div>
                    </Paper>
                })
            }
        </Carousel>
        {
            show ? <ToastContainer/> : null
        }
        </div>
        <div>
            <div className='movie-genre-title'> 
            GENRES 
            </div>

            <div className='movies-genre-cont'>
            {
                genres.map((genre,i)=>{
                    return <Genre data={genre} handleClick={handleGenreClick}  key={i}/>
                })
            }
            </div>
        </div>

        <div className='movies-outer-container'>
            {
                updatedArr?.map((data)=>{
                    return <MovieCard data={data}/>
                })
            }
        </div>
        
        
        </>
  )
}

export default Hero