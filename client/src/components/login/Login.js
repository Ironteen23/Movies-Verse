import { Button, Input, TextField } from '@mui/material'
import "./Login.css";
import React, { useState } from 'react'
import api from "../../api/axiosConfig"
import { ToastContainer } from "react-toastify";
// import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import LoadingButton from '@mui/lab/LoadingButton';
import { LoadingButton } from '@mui/lab';
import { login } from '../../redux/slices/userSlice';

const Login = () => {

    const[loading , setLoading] = useState(false);
    const[show,setShow] = useState(false);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    function redirect(){
        navigate(`/`);
    }



    const [user,setUser] = useState({
        name:"",password:""
    })

    const handleSubmit = async()=>{

        setLoading(true);
        try {


            const response = await api.post("api/v1/users/login" , user);

            if(response.status === 200)
            {
                setShow(true);
                toast.success("Login successfully", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });


                  dispatch(login({name:user.name , isLoggedIn:true , email:"hem@gmail.com"}))

                  setTimeout(()=>{
                      redirect();
                  },1000)
                return;
            }

            else if(response.status === 500)
            {   
                setShow(true);
                toast.error("Please Enter Password", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return;
            }

            



            
        } catch (error) {

            if(error.response.status === 500)
            {   
                setShow(true);
                toast.error("Incorrect Password or Username", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return;
            }

            else
            console.log(error);
        }

        finally{

            setLoading(false);
        }

    }   

    const handleChange = (e)=>{
        e.preventDefault();
        setUser((prevState)=>{
                return{
                    ...prevState,
                    [e.target.name]:e.target.value,
                }
        })
        console.log(user);
    }


  return (
    <>

    <div className="login-outer-container">

        <h3 style={{textAlign:"center" , color:"black"  , marginTop:"20px" , marginBottom:"20px" , fontSize:"2rem"}}> Join the Multiverse of Cinema</h3>
        <div className='login-inner-container'>

            <div className='input-container'>
            <TextField name="name" placeholder='Name' type='text' fullWidth onChange={(e)=>handleChange(e)}/>
            </div>

            <div className='input-container'>
            <TextField name="password"  placeholder='Password' type='password' fullWidth  onChange={(e)=>handleChange(e)}/>
            </div>

        {
        !loading ? 
        <Button onClick={()=>handleSubmit()} variant='contained' size='large' style={{marginTop:"20px"}}> LOGIN </Button>
            :
        <LoadingButton  onClick={()=>handleSubmit()} variant='contained' size='large' style={{marginTop:"20px"}} loading> LOGIN </LoadingButton>

        }
        </div>


    </div>
    {
        show ? <ToastContainer/> : null
    }

    </>
  )
}

export default Login