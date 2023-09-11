import React from 'react'
import { useState } from 'react'
import { Button, Input, TextField } from '@mui/material'
import "../login/Login.css";
import { Form } from 'react-bootstrap';
import api from "../../api/axiosConfig"
import { ToastContainer } from "react-toastify";
// import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/userSlice';

// import LoadingButton from '@mui/lab/LoadingButton';
import { LoadingButton } from '@mui/lab';

const Signup = () => {

    const [show , setShow] = useState(false);
    const [loading,setLoading] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    function redirect(){
        navigate(`/`);
    }


    const [user,setUser] = useState({
        name:"",email:"",password:""
    })

    const handleSubmit = async(e)=>{

        setLoading(true);
        console.log(user);

        if(user.name === "")
        {
            setShow(true);
            toast.error("Please Enter Username", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        setLoading(false);
            return;

        }

        if(user.email === "")
        {
            setShow(true);
            toast.error("Please Enter Email", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLoading(false);
            return;

        }

        if(user.password === "")
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
            setLoading(false);

            return;
        }

        try
        {   

            const response = await api.post("api/v1/users/signup" , user);

            console.log("status is" , response);

            if(response?.status === 200)
            {
                // e.target.reset;
                setShow(true);
                toast.success("Signup successfully", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                console.log("Successful");
            setLoading(false);


            dispatch(login({name:user.name , isLoggedIn:true , email:user.email}));
                
                setTimeout(()=>{
                    redirect();
                },1000)
                return;
               
            }

            else if(response?.status === 500)
            {
                console.log("Internal server Error")
              setLoading(false);

                return;
            }

           

            setLoading(false);
            return;

            // console.log("SENDING USER TO SERVER")
            // console.log(user);
        
          
        }
        catch(err)
        {       
            setShow(true);

            if(err?.response?.status === 500){
                toast.error("Same Username or Email Already Exists", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            setLoading(false);

            console.log("internal server error");
            }

            console.log("ERROR " , err);
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

            {/* <Form onSubmit={(e)=>handleSubmit(e)} > */}
            <div className='input-container'>
            <TextField name="name" placeholder='Name' type='text' fullWidth onChange={(e)=>handleChange(e)} label="Name"/>
            </div>

            <div className='input-container'>
            <TextField name="email"  placeholder='Email' type='text' label="Email" fullWidth onChange={(e)=>handleChange(e)}/>
            </div>


            <div className='input-container'>
            <TextField name="password"  placeholder='Password' type='password' label="Password" fullWidth  onChange={(e)=>handleChange(e)}/>
            </div>
        {/* <Button onClick={(e)=>handleSubmit(e)} variant='contained' size='large' style={{marginTop:"20px"}}> SIGN-UP </Button> */}
            {/* </Form> */}
       
        {
            !loading ? 
        <LoadingButton onClick={(e)=>handleSubmit(e) } variant='contained' size='large' style={{marginTop:"20px"}}  > SIGN-UP</LoadingButton>
        : <LoadingButton onClick={(e)=>handleSubmit(e) } variant='contained' size='large' style={{marginTop:"20px"}} loading="true" > SIGN-UP</LoadingButton>
        
        }
        


        </div>

    </div>
    {
        show ? 
    <ToastContainer/> : null
    }
    
    </>
  )
}

export default Signup