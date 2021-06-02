import React, {Fragment} from "react"
import { Link, useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import logosmile from "../img/logo_smile.png"
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Button from 'aws-northstar/components/Button';
import Divider from '@material-ui/core/Divider';
import clubhouseicon from "../img/clubhouse_icon.png"

const NavigationBar = () => {
return (
    <> 
    <div className="navbar">
    <Container fluid style={{backgroundColor:''}}>
    {/* <Row fluid style={{backgroundColor:"blue"}}>   */}


        <div style={{display:"flex"}}> 
    
        <img height="50px" width="50px" src={clubhouseicon} /> 
        
        <div style={{backgroundColor:"", paddingLeft:"10px"}}> 
        <p style={{margin:"auto", width:"50%", float:"left"}}> Clubhouse Analytics </p>  
        </div> 

        </div> 


        {/* <Col xl={8}> </Col> */}
    {/* </Row> */}
    <div style={{float:"right"}}>
    <p style={{margin:"auto", width:"50%"}}> About </p>  

    </div>
    </Container> 
    </div>

    </>

// <div className="navbar">
//     <div>
//     <img height="50px" width="50px" src={clubhouseicon} /> 
//     <div>
//     <p style={{float:"left",height:"50px"}}> </p>
//     </div>
     
//     </div>

//     <div style={{backgroundColor:"red"}}> 


//     </div>

// </div> 



    )
}
export default NavigationBar; 