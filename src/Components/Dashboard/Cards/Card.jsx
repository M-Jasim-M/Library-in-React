import React from 'react'
import './Card.css'
import cimg from '../../../Asserts/Img/lipic.png'

function Card() {
  return (
    <>
    <div className="camain">
       <img src={cimg} alt="" />
       <span>Dawan-e-ghalib</span>
       <span>Ghalib</span>
       <div className="disda">
        <div className="down">Download</div>
        <div className="add">Add In Fav</div>
       </div>
    </div>
    
    </>
  )
}

export default Card