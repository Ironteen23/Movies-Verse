 import logo from './logo.svg';
 import api from './api/axiosConfig';
 import Layout from './components/Layout';
 import { Route , Routes } from 'react-router-dom';
 import { useState , useEffect } from 'react';
import './App.css';
import Home from './components/home/Home';
import Carousel from 'react-material-ui-carousel';
import Header from './components/header/Header';
import Reviews from './components/reviews/Reviews';
import Trailer from './components/trailer/Trailer';
import Login from "./components/login/Login";
import Signup from './components/signup/Signup';

function App() {

  const[movies , setMovies] = useState();
  const[movie , setMovie] = useState();
  const[reviews , setReviews] = useState();

  const getMovies = async()=>{

    try {
    const res = await api.get("/api/v1/movies/");
    console.log("res" , res);
    setMovies(res.data);
      
    } catch (error) {
      console.log(error);
    }
  }

  const getMovieData = async(movieId)=>{
    try {
        const res = await api.get(`api/v1/movies/${movieId}`);

        const singleMovie = res.data;
        setMovie(singleMovie);

        console.log("single reviews " , singleMovie)
        setReviews(singleMovie.reviewIds);

    } 
    catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getMovies();
  },[])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home movies={movies}/>}>Home</Route>
        <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
        <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
