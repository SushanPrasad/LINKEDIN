import {Link} from "react-router-dom";
import styled  from "styled-components";
 
   const Header = (props) => {
      return ( 
          <div>
            <Container>

            <Content>  
  <Logo>
                <a href ="/home">
                    <img src="/images/icons8-linkedin-96.png" alt=""   />   </a>
  </Logo>    
            
  <Search>  
                 <div>
                    <input type="text" placeholder="Search" />
                 </div>
                 <SearchICon>
                    <img src ="/images/searchicon.png" />
                 </SearchICon>
  </Search>

<Nav >

    <NavWrap>

       <NAvList  className=" active ">
    <a>
        <img src="https://ik.imagekit.io/amazonshop/new_home_YjWWMLJXx.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659506164941" alt=""/>
         <span> Home</span>
    </a>
      </NAvList>

     <NAvList>
    <a>
        <img src="images/icons8-management-32.png" alt=""/>
         <span> My Network</span>
    </a> 
    </NAvList>

    <NAvList>
    <a>
        <img src="images/newjob.png" alt=""/>
         <span> Jobs</span>
    </a>
   </NAvList>

   <NAvList>
    <a>
        <img src="images/msgnew.png" alt=""/>
         <span> Messages</span>
    </a>    
    </NAvList>

    <NAvList>
    <a>
        <img src="https://ik.imagekit.io/amazonshop/icons8-notification-30_qWfZ1NBIqS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659505993121" alt=""/>
         <span> Notifications</span>
    </a>   
    </NAvList>

    <USer>
    <a>
        <img src="images/user.png" />
        <span>Me</span>
        <img src="images/down.png"/>
    </a>

    <SignOut>
      <Link className="link" to="/">
      <a> SIGN OUT </a>
      </Link>

    </SignOut>
</USer>

    <Work>
   <a>
        <img src="images/LAST.png" />
        <span>Work</span>
        <img src="images/down.png"/>
    </a>
   </Work>

</NavWrap>
</Nav>
            </Content>
        </Container>
        </div>        
    );  
};



const homee= styled.div `

margin-top :200px;
`;

const Container = styled.div `

background-color : white;
border-bottom: 1px solid rgba (0,0,0,0.0.08);
left:  0;
padding: 0 24px;
position: fixed;
top: 0;
width: 100vw;
z-index: 100;

`;


const Content = styled.div `

display: flex;
align-items: center;
margin: 0 auto;
min-height: 100%;
max-width:1400px;

`;


const Logo = styled.div`

margin-right : 8px;
font-size: 0px;

& > a{
    img{ height:39px;
          width: 38px;
}
}

`;

const Search = styled.div `

opacity: 1;
flex-grow: 1;
position: relative;

& > div {
    max-width: 220px;

    input {
        border: none;
        box-shadow: none;
        background-color: #eef3f8;
        border-radius : 20px;
        color: rgba (0,0,0,0.9);7

        width: 218px;
        padding: 0 8px 0 40px;
        line-height: 1.75;
        font-weight: 400;
        font-size: 14px;
        height: 34px;
         border-color: #dce6f1;
         vertical-align: text-top;
         width:16rem;
         
    }
}

`;


const SearchICon = styled.div `

     width: 40px;
     position:absolute;
     z-index: 1;
     top: 2px;
     left: 2px;
      border-radius : 0 2px 2px 0;
      margin: 0;
      pointer-events: none;
      display: flex;
      justify-content: center;
      align-items: center;

`;


const Nav = styled.div `

margin-left: 250px;
display:block;
align-items: end;

`;

const  NavWrap = styled.ul `
   display:flex;
   flex-wrap: nowrap;
   list-style-type: none;


   .active {
    span:after{
        content:'';
        transform: scale(1);
        border-bottom: 2px solid var (--white, #fff);
        bottom:0;
        left: 0;
        position:absolute;
        transition: transform 0.2s  ease-in-out;
        width: 100%;
        border-weight: rgba (0, 0, 0, 0.9);
        
    }
   }

`;


const NAvList= styled.li `
    display: flex;
    align-items: center;
    a {
        cursor:pointer;
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 400;
        justify-content: center;
        line-height: 1.5;
        min-height: 52px;
        min-width: 80px;
        position: relative;
        text-decoration: none;

        span {

            color: rgba(0,0,0,0.6);
            display:flex;
            align-items:center;
            font-weight: 600;

        }

        img{
            height:25px;
            width:30px;

        } }
 
        ${'' /* @media (max-width: 768px) {

            min-width: 0px;

        } }
     */}

&:hover,
&:active
                             {'' /*   active uses it pass props into link */}
{
    a{
        span {
            color: #0078D4;
        }
    }

}

`;


const SignOut = styled.div`

position: absolute;
top: 60px;
background: white;
border-radius : 0 0 5px 5px;
width: 100px;
font-size: 16px;
transition-duration: 167ms;
text-align:center;
display:none;

a{
    font-weight:700;

}

&:hover {
    a{
        color: #0078D4;

    }
}

`;

const USer = styled(NAvList) `

a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;

}

span{
    display: flex;
    align-items: center;
    }

&:hover {
                                    {'' /* $-fancy selector is to selectin signout tag */}
    ${SignOut} {
        align-items: center;
        display: flex;
        justify-content: center;

    }
}

`;

const Work = styled(USer) `
border-left: 1px solid rgba(0, 0 ,0 ,0.08);

`;

export default Header ;


