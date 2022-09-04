import React from 'react';
import "./Home.css";


import Sidebar from './Sidebar';
import Feed from "./Feed";
import Widget from './Widget';


function Home() {

  
  return (

    <div className='app_body'>
     
              <Sidebar />
              <Feed /> 
              <Widget />

    </div>

  )
}


export default Home;