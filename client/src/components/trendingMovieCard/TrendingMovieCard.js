import React, { useEffect , useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './TrendingMovieCard.css'

const TrendingMovieCard = (data) => {

    console.log("movie card" , data.data.original_title);
    let url = "http://image.tmdb.org/t/p/w500/"
    const res = data.data;
    url = url + res.poster_path;

    const[loading , setLoading] = useState(false);

    useEffect(()=>{

      setLoading(false);
      setTimeout(()=>{
      setLoading(true);
      },2000);
      // console.log("data");

    },[]);
   
    
  return (
    <>
    <div  className='trending-outer-cont'   >

        {
          loading ? 
          <>
          <div className='img-cont' style={{"--img":`url(${url})`}} >
            </div>
          <div className='title-cont'>
              {data.data.original_title}
          </div>
          </>

        : <Skeleton  height={240} width={220} baseColor='#FFEFF0'  style={{borderRadius:"20px" }}/>

        }


    </div>
    </>
  )
}

export default TrendingMovieCard