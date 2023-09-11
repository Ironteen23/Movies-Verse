import {useEffect, useRef, useState} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewform/ReviewForm';

import React from 'react'
import Genre from '../genre/Genre';

const Reviews = ({getMovieData,movie,reviews,setReviews}) => {

    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;
    const [genre,setGenre] = useState([]);

    // console.log("these are the R : , " ,  reviews);

    useEffect(()=>{
        getMovieData(movieId);
        if(movie)
        setGenre(movie.genres);
    },[])

    const addReview = async (e) =>{
        e.preventDefault();

        const rev = revText.current;

        try
        {
            const response = await api.post("/api/v1/reviews",{reviewBody:rev.value,imdbId:movieId});

            const updatedReviews = [...reviews, {body:rev.value}];
    
            rev.value = "";
    
            setReviews(updatedReviews);
        }
        catch(err)
        {
            console.error(err);
        }
        



    }

  return (
    <Container>
        <Row>
            <Col><h3 style={{marginTop:"40px" , display:"flex" , alignItems:"center" , marginBottom:"40px" , fontSize:"3rem"}}>Reviews</h3></Col>
        </Row>
        <Row className="mt-2">
            <Col>
                <img src={movie?.poster} alt="" />

                <div style={{fontSize:"2rem" , display:"flex" , justifyContent:"center" , alignItems:"center" , marginTop:"20px" , marginBottom:"40px"}}>Genres</div>
                <div style={{display:"flex" , justifyContent:"space-evenly" , alignItems:"center"}}>
                {
                    genre.map((genre)=>{
                        return <Genre data={genre}/>
                    })
                }
               </div>
            </Col>
            <Col>
                {
                    <>  
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText = "Write a Review?" />  
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                }
                {
                    reviews?.map((r) => {
                        return(
                            <>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>                                
                            </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>        
    </Container>
  )
}

export default Reviews