import React from "react";

const Slide = (props)=>{

    return(
        <div style={{height:"700px" , width:"100%"}}>
        <img src={props.movie.poster}></img>
        <div>{props.movie.title}</div>
        </div>
        
    )

}

export default Slide;