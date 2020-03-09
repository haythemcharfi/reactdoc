

import React, { Component } from 'react';

const menu = [{name:"About us"},{name:"Careers",},{name : "Contact",value:["Marketing ","Customer succes", "Finance & Administration"]}]
class App extends Component {
  state = { 
    display : false
   }
 Show =()=> {
   console.log("show")
   this.setState({
     display:!this.state.display
   })
 }
  render() {
    return ( 
      <div className="total">
          <div>
              <img className="first-img" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"/>
          </div>
      <div className="divet">
      {menu.map((el,i)=><div className="espace" key= {i}>
            {el.value ? <div className="hover">
            
             <p onClick={this.Show} >  {el.name}</p>
                 <div className={ this.state.display ? "display" : "hide"}>
                {el.value.map((el)=><ul style={{padding:'0'}} >
               <a href="https://www.docplanner.com/about-us">
                <li >{el}</li>
                </a>
                </ul>)}
                </div>
            </div>:
            <div>
              {el.name}
              </div>}
              </div>
   )}
    </div> 
          
      </div>);
  }
}
 
export default App;