import React , { useEffect, useState } from 'react';
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventIcon from '@mui/icons-material/Event';
import NewspaperIcon from '@mui/icons-material/Newspaper';

import Post from "./Post";
import  db  from "./firebase";
import InputOption from './InputOption';

function Feed() {

  const [posted,setPosted]= useState([]);

  const [inputed, setInputed]= useState([]);

  useEffect(() => {
    db.collection("posted").onSnapshot(snapshot =>{
      setPosted (
      snapshot.docs.map(doc =>  doc.data() ) )   
      }); },[]);

    //{ id: doc.id, 
  const sendPost = (e) => {
  e.preventDefault();

  db.collection('posted').add({
                                 name: 'Sushan Prasad',
                          description: '@successfully working',
                            messaging: inputed,
                              postUrl:'',
                             });
  setInputed('');
  };
   
  return (
    <div className="feed">
    
    <div className='inputcont'>
     
      <div className="input">
      <CreateIcon />
      <form>
      <input  
                         value={inputed}
                          onChange={(e) => setInputed(e.target.value)}  
                              type="text"  />
       
        <button onClick= {sendPost} type="submit"> Send</button>
        
      </form>
          </div>
      
    <div className="option">

<InputOption 
Icon={ImageIcon}
title=" Photo " 
color="#70B5F9" />


<InputOption 
Icon={SmartDisplayIcon}
title=" Video " 
color="#5F9B41" />


<InputOption 
Icon={EventIcon}
title=" Event " 
color="#C37D16" />


<InputOption 
Icon={NewspaperIcon}
title=" Write article " 
color="#E16745" />

{/*    inputoption use props */}
      </div>
    </div>
    
    {posted.map(({ id, data : { name, description, messaging, postUrl} }) =>
    (<Post  
     
          key={id}
          name={name}
          description={description}
          messaging={messaging}
          postUrl={postUrl}                    
     />)
    )
    }

    {/* <Post 
    name='Sushan Prasad'
    description='welcome backkk'
    messaging='you finish this today'  />

 */}

    </div>
  )
}

export default Feed