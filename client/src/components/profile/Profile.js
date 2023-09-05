import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import api from "../../api/axiosConfig";
import MovieCard from '../movieCard/MovieCard';
// import { UseSelector } from 'react-redux'


const Profile = () => {

    const user = useSelector((state)=>state.user.value);

    const [temp,setTemp] = useState({name:"",email:"",password:""})
    const [arr,setArr] = useState([]);
    const [finarr,setFinArr] = useState([]);

   

    const getFavMovies = async()=>{
        try {
            
            temp.name = user.name;
            const res = await api.post("api/v1/users/getFavList", temp);

           const movie_ids = res.data;
            setArr(movie_ids);

            console.log("herer is " , arr);
           
    
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(()=>{
        getFavMovies();
    },[])



  return (
    <>
    <div>
        
    </div>
    <div>
       
       <div style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
        <h2>
       YOUR FAVOURITES 
       </h2>
       </div>

       <div >
        {
            arr.length>0 ? <div style={{display:"flex" , alignItems:"center" , justifyContent:"space-evenly"}}>
                {   
                    arr?.map((det,i)=>{
                        return <MovieCard data={det} key={i}/>;
                    })
                }
            </div>
            : <div>ADD TO FAVOURITES TO GET STARTED ON YOUR JOURNEY</div>
        }
       </div>

    </div>

    
    </>
  )
}

export default Profile



