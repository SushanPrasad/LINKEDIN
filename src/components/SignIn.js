import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage';
import {Link} from "react-router-dom";


import "./SignIn.css";

const SignIn=() => {


    const SignInWithFirebase =() => {
        var google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider)
        .then ((re)=> {
            console.log(re);
        })
        .catch((err)=> {
            console.log(err);
        })
    }

return(
    <div className=' sid'>
   
   
    <button onClick={SignInWithFirebase} className="btn">
           <img src="images/icons8-google-48.png" className='imaag' alt='' />
            
           {/* <Link className="link" to="/">

<a> SIGN OUT </a>
</Link> */}
            
<Link className="link" to="/home">
           <a  href='/home'>SignIn </a>    
 </Link>          
    </button>
    </div>
)}


export default SignIn