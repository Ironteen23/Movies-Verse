import React, { useEffect, useState } from 'react'
import './Trending.css';
import api from "../../api/axiosConfig";
import TrendingMovieCard from '../trendingMovieCard/TrendingMovieCard';

const Trending = () => {

    const [pageNo , setPageNo] = useState(1);
    const[arr,setArr] = useState([]);
    
    const pages = [];
    for(let i=1;i<20;i++)
    {
        pages.push(i);
    }

    const handleClick = (i)=>{
        setPageNo(i);
        getTrendingMovies();
    }


    const getTrendingMovies = async()=>{

        try {
            const res = await api.get(`api/v1/movies/trending/${pageNo}`);
            const data = res.data.results;
            console.log("this is the res" , data);
            setArr(data);
        } 
        catch (error) {
            console.log(error);
        }

    }

    useEffect(()=>{
        getTrendingMovies();
    },[]);

  return (
    <>
    <h2 style={{display:"flex" , alignItems:"center" , color:"white" ,  justifyContent:"center" , marginTop:"50px" , marginBottom:"50px" }}>
        TRENDING MOVIES
    </h2>
    <div className='movie-card-outer'>
    {   
        arr.map((movie)=>{
            return <TrendingMovieCard data={movie}/>
        })
        
    }
    </div>

    <div className='page-outer-cont'>

        {
            pages.map((i,indx)=>{
                
                    return pageNo !== i ?
                    <div className='page-cont' key={i} onClick={()=>handleClick(i)}>{i}</div>
                    : <div className='page-used-cont' key={i}>{i}</div>
                
            })
        }

    </div>
    </>
  )
}

export default Trending