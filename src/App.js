import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heythem from './component/Header'
import  Section1 from './component/Section'
import Second from './component/second'
import Logo from './component/petit component'
import Word from './component/FirstWord'
import Hi from './component/imp'
import Img from './component/Image'
import Foot from './component/Footer'



const tab=[{class:"premiere",logo:"https://www.docplanner.com/img/flag.png",first:"Leader in 10 countries",second:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile",background:"#FFFFFF"},{class:"deuxieme",logo:"https://www.docplanner.com/img/patients.png",first:"30 million unique patients",second:"visit us every month",background:"#FFFFFF",},{class:"troixieme",logo:"https://www.docplanner.com/img/doctors.png",first:"1.5 million appointments",second:"booked last month",background:"#FFFFFF"},{class:"quatérieme",logo:"https://www.docplanner.com/img/flag.png",first:"2 million active doctors",second:"trust in our solutions",background:"#FFFFFF"}]


const paragraphe1 = [{class:"select",background :"#00CCB1" ,p: "For patients ",  p1: "Find a doctor book a visit and solve any health-related doubt", img: "https://www.docplanner.com/img/screen-marketplace@2x.png" }, {class:"no-select",background:"#3D83DF", p: "For doctors", p1: " Save time managing visits and cut no-shows by half", img: "https://www.docplanner.com/img/screen-saas@2x.png" }]


const images=[{name:"https://www.docplanner.com/images/warsaw.png",last:"https://www.docplanner.com/career?&loc=spain#jobs-offers",second:"Warsaw"},{name:"https://www.docplanner.com/images/barcelona.png",last:"https://www.docplanner.com/career?&loc=rome#jobs-offers",second:"spain"},{name:"https://www.docplanner.com/images/istanbul.png",last:"https://www.docplanner.com/career?&loc=rome#jobs-offers",second:"Istanbul"},{name:"https://www.docplanner.com/images/rome.png",last:"https://www.docplanner.com/career?&loc=italy#jobs-offers",second:"Rome"},{name:"https://www.docplanner.com/images/mexico-city.png",last:"https://www.docplanner.com/career?&loc=mexico#jobs-offers",second:"Mexico"},{name:"https://www.docplanner.com/images/curitiba.png",last:"https://www.docplanner.com/career?&loc=brazil#jobs-offers",second:"Curtiba"}]






function App() {
  return (
    <div className="App" >
     <Heythem/>
     <Section1 />
     <Second arr2={paragraphe1}/>
     <Logo/>
     <Word arr={tab}/>
     <Hi/>
     <Img arr3={images} />
     <Foot/>
    </div>
  );
  }

export default App;
