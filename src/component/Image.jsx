import React from 'react';

const Img=(props)=>{
    return (
        <div className="image">
            {props.arr3.map((el,i)=>{
                return (
                    <div className="img" key={i}>
                        <img src={el.name}/>
                        <div className="flexi">
                        <a className='sty' href={el.last}>{el.second}</a>
                        <a href={el.last}><button className="sty1" >opening</button></a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Img