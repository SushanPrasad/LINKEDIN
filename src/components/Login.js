
import styled from "styled-components";
import "./Login.css";
import SignIn from "./SignIn";




const Login = (props) => {

    

    return (
       <Container>
       <Nav>
        <a href="/">
            <img src="/images/—Pngtree—linkedin icon_3584856.png"  className="link" alt='' />
        </a>
<div>

<signInnn>  <SignIn /> </signInnn>

<div><h1 className="SIGG"> SIGN IN</h1> </div>

        </div>

</Nav>

<Section> <Hero> <h1>  Welcome to your professional community  </h1>
          
                <img src= "images/d58zfe6h3ycgq5l1ccjpkrtdn.svg"  alt="" />
          </Hero>  
          
         <form> 

                {/* <Google onClick={() => props.signIn()}>  */}
         
         
         

         </form> 
          
          
           </Section>
        </Container>

    );
};

const Container = styled.div`
padding:0px;
`;

const Nav =styled.nav `
max-width:1128px;
margin:auto;
padding: 12px 0 16px;
display: flex;
align-items: center;
position:relative;
justify-content: space-between;
flex-wrap: nowrap;

 & > a  {
     width: 135px;
     height: 34px;
     ${'' /* @media (max-width: 768px) {
        padding: 0 5px;
     } */}

 }

`;



const Section =styled.section`
align-contnt:start;
display:flex;
min-height: 700px;
padding-bottom: 138px;
padding-top: 0px;
padding: 33px 0;
position: relative;
flex-wrap: wrap;
width: 100%;
max-width: 1128px;
align-items: center;
margin: auto;
@media (max-width: 768) {
    margin: auto;
    min-height: 0px;

} 


`;



const Hero = styled.div `

width: 100%;


h1{
    padding-bottom:0;
    width: 50%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width : 768px) {    
        text-align: center;
        font-size: 20px;
        width: 100%;
        line-height: 2;

    }

}
 

 img{
    z-index: 0;
    width: 700px;
    height: 676px;
    position: absolute;
    bottom: -2px;
    right: -150px;

    @media (max-width:768px) {
        top: 5px;
        width:initial;
        position:initial;
        height: initial;
    }

 }








`;



 export default  Login  ;