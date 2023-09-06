import React from 'react'
import "./Genre.css";

const Genre = (data) => {
    console.log("data is ", data);
  return (
    <>
    <div style={{cursor:'pointer'}}>
        <div className='genre-cont'>
            <div className='genre-title'>
                {data.data}
            </div>
        </div>
    </div>
    </>
  )
}

export default Genre