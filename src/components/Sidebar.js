  import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";

function Sidebar() {
    //recent in sidebar

    const recentItem = (topic) => (
        <div className='recentitem'>
            <span className='hashtag'> # </span>
            <p> {topic} </p>
        </div>
                                )


  return (
    <div className="sidebar">   
    
    <div className='side_top'>  
    <img src='images/gradienta-pYDaWACPVZw-unsplash.jpg ' className='img'  alt='' />

          <Avatar src='https://ik.imagekit.io/amazonshop/hhghgh_j0vcXsCHQ.jfif?ik-sdk-version=javascript-1.4.3&updatedAt=1644426127114' className='side_avatar'/>     

        <h2> Sushan Prasad</h2>
        <h4> sushan.prasad2712@gmail.com</h4>
   </div>   

 <div className='stat'>  
    <div className='side_stats'> 

    <h4> Who viewed you  </h4>
    <p className='like' > 
      9,021
    </p>
    </div>

     <div className='side_stats'> 
    <h4> Views on post  </h4>
    <p className='like'>   8,010 </p>
</div>
</div>

   <div className='bottom'> 
    <p> Recent </p>
    
    {recentItem('Reactjs')}
    {recentItem('Programming')}
    {recentItem('Softwareengineering')}
    {recentItem('design')}
    {recentItem('developer')}

   </div>   
</div>
  )}

export default Sidebar