import React from 'react'
import './Card2.css'


function Card2(props) {
  return (
    <>
    <div className="camain">
       <img src={props.image} alt="" />
       <span>{props.bname}</span>
       <span>{props.name}</span>
       <div className="disda">
        <a href={props.down} download>
        <div className="down">Download</div></a>
        <div className="add">Add In Fav</div>
       </div>
    </div>
    
    </>
  )
}

export default Card2