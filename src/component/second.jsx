import React from 'react';

const Second = (props) => {
    return (
        <div className="hh">
            {props.arr2.map((el,i)=>{return (
                <div className={el.class}  key={i} style={{backgroundColor :el.background}}>
                 
                    <p className="patient">{el.p}</p>
                    <p className="doctor">{el.p1}</p>
                    {el.background ==='#00CCB1'?<select name="" id="but-sel">
                       <option value="">SELECT</option>
                       <option value="">Argentina</option>
                       <option value="">France</option>
                       <option value="">italie</option>
                       <option value="">Germany</option>
                   </select>:console.log("NN") }
                 <img className="big" src={el.img} alt=""/>
                   
                </div>
                
            )
                
            })}
            


        </div>
    )
}
export default Second