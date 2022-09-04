import React from 'react';
import "./InputOption.css";

function InputOption({title,Icon, color}) {
  return (
    <div className='inputoption'>
    <Icon style={{color:color} }/>  
    <h4>{title}</h4>
     {/* used this props in feed.js for adding those photo  event  */}
    </div>
  )
}

export default InputOption