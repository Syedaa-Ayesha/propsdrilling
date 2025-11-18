import React from 'react'

const Card = (props) => {
    
  return (
    <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <span>{props.followers}</span>
        <p>{props.des}</p>
        <button>Click Me!</button>
    </div>
  )
}

export default Card