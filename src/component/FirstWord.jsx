import React from 'react';
import Image from "../logo-doc.png"


const Word=(props)=>{

    return (
    <div className="color">
        <div className="theword">
            <p className="the">The world's iggest healthcare platform</p>
            <p className="word">We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
            <img className="lpo" src={Image}/>
        </div>
        <div className="wrap">
  {props.arr.map((el,i)=>{
      return(
          <div className={el.class} key={i} style={{backgroundColor:el.background}} >
              <img className="bas" src={el.logo}/>
              <h4 className="h44">{el.first}</h4>
               <p className="p44">{el.second}</p>

          </div>
          
      )
  })}
</div>
        
 </div>
    )
}
export default Word