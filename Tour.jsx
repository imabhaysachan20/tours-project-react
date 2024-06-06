import { useState } from "react"


const Tour = ({id,name,info,price,image, removeTour}) => {
  let [readmore,setreadmore] = useState(false);
  return (  
    <article className="single-tour">
      <img src={image} alt={name} className="img"/>
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readmore?info:info.substr(0,200)} <button onClick={()=>{setreadmore(!readmore)}} className="info-btn">{readmore?"Show Less":"Show More"}</button></p>
      </div>
      <button onClick={()=>{removeTour(id)}} className="btn btn-block">Remove</button>
    </article>
  )
}

export default Tour
