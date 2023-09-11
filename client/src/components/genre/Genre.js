import React from 'react'
import "./Genre.css";

const Genre = ({data,handleClick}) => {
    console.log("data is ", data);
  return (
    <>
    <div style={{cursor:'pointer'}} onClick={()=>handleClick(data)}>
        <div className='genre-cont'>
            <div className='genre-title'>
                {data}
            </div>
        </div>
    </div>
    </>
  )
}

export default Genre