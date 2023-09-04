import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link, NavLink} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
// import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/userSlice";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Header = () => {

    const user = useSelector((state)=>state.user.value);
    const dispatch = useDispatch();
    const [show , setShow] = useState(false);

    const handleLogout = ()=>{
        dispatch(logout());
        toast.success("Logged Out successfully", {
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

 
return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color":'gold'}}>
                <FontAwesomeIcon icon ={faVideoSlash}/>Gold
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                    <NavLink className ="nav-link" to="/">Home</NavLink>
                    <NavLink className ="nav-link" to="/watchList">Watch List</NavLink>      
                </Nav>


                {
                    !user.isLoggedIn ?
                <>
                <Link to={"/Login"}>
                <Button variant="outline-info" className="me-2">Login</Button>
                </Link>
                <Link to={"/Signup"}>
                <Button variant="outline-info">Register</Button>
                </Link>
                </>

                : 
                <>
                <div style={{marginRight:"20px"}}>{user.name}</div>
                <Button variant="outline-info" onClick={()=>handleLogout()}>
                    Logout
                </Button >
                </>

                }



            </Navbar.Collapse>
        </Container>

            {
                show ? <ToastContainer></ToastContainer> : null
            }
    </Navbar>
  )
}

export default Header