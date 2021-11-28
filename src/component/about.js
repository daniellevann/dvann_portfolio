import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact,faJs,faJava,faWordpress,faCss3, faHtml5,faPython} from '@fortawesome/free-brands-svg-icons'
import timeline1 from "./Information Tech Fundamentals.png";
import timeline2 from "./Information Tech Fundamentals (2).png";
import styled, {keyframes} from "styled-components";
import {slideInLeft} from "react-animations";

function about(){
    const rollInAnimation = keyframes`${slideInLeft}`;

    const RollIn = styled.div`
  animation: 1s ${rollInAnimation};
`;
    const RollIn2 = styled.div`
  animation: 3s ${rollInAnimation} ;
`;
    const RollIn3 = styled.div`
  animation: 5s ${rollInAnimation};
`;

    return(
        <div>
           <h1>About.</h1>
            {/*<img src={me} alt={"me"} height={"200px"} width={"230px"}/>*/}
            <RollIn><h2>Education</h2>
            <h4>Purdue School of Engineering and Technology Indianapolis</h4>
            <h4>Bachelor of Science in Computer Information Technology, <i>Software Development Concentration</i></h4>
        </RollIn>
            <RollIn2><h2>Skills</h2>
            <div className={"skillList"}>
            <li><FontAwesomeIcon icon={faReact} style={{height:"80px",width:"80px"}}/><br/>React</li>
            <li><FontAwesomeIcon icon={faJs} style={{height:"80px",width:"80px"}}/><br/>JavaScript</li>
            <li><FontAwesomeIcon icon={faJava} style={{height:"80px",width:"80px"}}/><br/>Java</li>
           <li><FontAwesomeIcon icon={faCss3} style={{height:"80px",width:"80px"}}/><br/>CSS3</li>
            <li><FontAwesomeIcon icon={faHtml5} style={{height:"80px",width:"80px"}}/><br/>HTML5</li>
            <li><FontAwesomeIcon icon={faWordpress} style={{height:"80px",width:"80px"}}/><br/>WordPress</li>
            <li><FontAwesomeIcon icon={faPython} style={{height:"80px",width:"80px"}}/><br/>Python</li>
            </div></RollIn2>
            <RollIn3>
            <h2>Relevant Coursework</h2>
<div style={{textAlign:"center"}}>
            <img src={timeline1} alt={"timeline1"} height={"1730px"} width={"600px"} style={{marginBottom:"0px"}}/>
        <br/>
            <img src={timeline2} alt={"timeline2"} height={"1730px"} width={"600px"} style={{marginTop:"-40px"}}/> </div>
        </RollIn3>

        </div>
    )
}

export default about;