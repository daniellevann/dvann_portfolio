import React from "react";
import lashes from "./img_8248.jpg"
import api from "./API.png"
import styled, {keyframes} from "styled-components";
import {bounceInLeft} from "react-animations";


function projects(){
    const rollInAnimation = keyframes`${bounceInLeft}`;

    const RollIn = styled.div`
  animation: 3s ${rollInAnimation};
`;

    return(
        <div>
            <h1>Projects.</h1>
           <RollIn> <div className={"Wrapper"}>
               <a href={"https://eyekandybykaylan.wordpress.com"}> <img src={lashes} alt={"LashTechBookingSite"}/><h3>EyeKandy by Kaylan</h3> </a>
                <a href={"https://cit374newmongoproject-dvann.uc.r.appspot.com/"}> <img src={api} alt={"api"}/><h3>MongoDB Python API</h3> </a>
            </div>
        </RollIn>
            <h2>More Work</h2>
            <h4><a href={"https://github.com/daniellevann"}> Check Out My GitHub!</a></h4>
            <h4><a href={"https://codepen.io/daniellevann"}> Check Out My CodePen!</a></h4>

        </div>
    )
}

export default projects;