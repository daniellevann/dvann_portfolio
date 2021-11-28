import React from 'react';
import {Link} from "react-router-dom";
import styled, { keyframes } from 'styled-components';
import {bounceInLeft} from "react-animations";
import {rollIn} from "react-animations";

function home(){
    const bounceAnimation = keyframes`${bounceInLeft}`;

    const Bounce = styled.div`
  animation: 5s ${bounceAnimation} ;
`;
    const rollInAnimation = keyframes`${rollIn}`;

    const RollIn = styled.div`
  animation: 1s ${rollInAnimation};
`;
    const RollIn2 = styled.div` 
   
  animation: 3s ${rollInAnimation};
   
`;


    return(
        <div >
           <RollIn><h1 style={{color:"#31C2D8", position:"relative"}} > Hello! I'm Danielle Vann. It is nice to meet you.</h1></RollIn>
       <RollIn2><h1 style={{color:"#F433AB", position:"relative"}}> I'm a Software Development student<br/> from Indianapolis, Indiana.</h1></RollIn2>
               <Bounce> <Link to={"/about"}><button> Learn More Here!</button></Link></Bounce>

            </div>
    )
}

export default home;