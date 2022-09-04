import { Avatar } from '@mui/material';
import React from 'react';
import InputOption from './InputOption';
import "./Post.css";

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


function Post({name,
               description,
                messaging,
                 postUrl} ) {
  return (
    <div className="post">
      

    <div className='post_header'>
        <Avatar src='https://ik.imagekit.io/amazonshop/hhghgh_j0vcXsCHQ.jfif?ik-sdk-version=javascript-1.4.3&updatedAt=1644426127114' />
    <div className='post_info'>
        <h2>  {name} </h2>
      
        <p> {description} </p>

    </div>
    
    </div>

    <div className='post_body'>
        <p> {messaging} </p>
    </div>
    

    <div className='post_button'>
    <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
    <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
    <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
    <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
    </div>    
    
    </div>
  
  )}

  export default Post