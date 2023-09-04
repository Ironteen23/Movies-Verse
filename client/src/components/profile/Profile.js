import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import api from "../../api/axiosConfig";
// import { UseSelector } from 'react-redux'


const Profile = () => {

    const user = useSelector((state)=>state.user.value);

    const getFavMovies = async()=>{
        try {
            const res = await api.get("api/v1/users/getFav", user.name);



        } catch (error) {
            console.log(error);
        }

    }

  return (
    <>
    <div>
        Welcome {user.name}
    </div>
    
    </>
  )
}

export default Profile



