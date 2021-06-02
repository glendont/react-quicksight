import React, {Fragment} from "react";

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import infopic1 from "../img/infopic1.jpg"
import infopic2 from "../img/infopic2.jpg"
import infopic3 from "../img/infopic3.jpg"

const Infographic = () => {
  return (
<Fragment> 
<Container fluid style={{backgroundColor:'white', paddingTop:"50px",paddingBottom:"50px"}}> 

<Row>
    <Col xs={2} sm={2} md={2} lg={3} xl={3}></Col>
    <Col xs={8} sm={8} md={8} lg={0} xl={6}>    <h1 className="info-primary-text"> TravelBuddy </h1> </Col>
    <Col xs={2} sm={2} md={2} lg={3} xl={3}></Col>

</Row>

<Row>

<Col xs={2} sm={2} md={2} lg={3} xl={3}></Col>
    <Col xs={8} sm={8} md={8} lg={6} xl={6}><h3 className="info-secondary-text"> The only buddy you need to bring along on your life's adventures</h3> </Col>
    <Col xs={2} sm={2} md={2} lg={3} xl={3}></Col>

</Row>
       
    <Row noGutters className="justify-content-md-center" style={{justifyContent:"center",paddingTop:'5rem'}}>

    <Col> </Col>
    <Col xs={0} sm={0} md={0} lg={0} xl={3}> 
    <Row className="d-flex justify-content-center center-block d-block m-auto"> <img src={infopic1} alt="Logo" className="infopic1" /></Row>
    <Row className="d-flex justify-content-center center-block d-block m-auto"><h2 style={{paddingTop:'1em', letterSpacing:'1px'}}> <center> Fly Safe </center></h2></Row>
    <Row className="d-flex justify-content-center center-block d-block m-auto" style={{padding:"1em"}}>

    <Col xs={10} sm={10} > <p style={{letterSpacing:'1px'}}> <center>  Through collaborations with airlines around the world, TravelBuddy offers you the best price across millions of flights to create your perfect trip.</center> </p></Col> 
    
    </Row>

    </Col>

    <Col xs={0} sm={0} md={0} lg={0} xl={3}> 
    <Row className="d-flex justify-content-center center-block d-block m-auto"> <img src={infopic2} alt="Logo" className="infopic1" /></Row>
    <Row className="d-flex justify-content-center center-block d-block m-auto"><h2 style={{paddingTop:'1em', letterSpacing:'1px'}}><center>Recuperate Well</center></h2></Row>
    <Row className="d-flex justify-content-center center-block d-block m-auto" style={{padding:"1em"}}> 
    


    <Col xs={10} sm={10} > <p style={{letterSpacing:'1px'}}> <center>  From the infinity pool at Marina Bay Sands, to sipping a margarita at the beachside at Finns Beach Resort, TravelBuddy helps you recuperate for your next adventure.</center> </p></Col> 


    </Row>
    </Col>

    <Col xs={0} sm={0} md={0} lg={0} xl={3}> 
    <Row className="d-flex justify-content-center center-block d-block m-auto"> <img src={infopic3} alt="Logo" className="infopic1" /></Row>
    <Row className="d-flex justify-content-center center-block d-block m-auto"><h2 style={{paddingTop:'1em', letterSpacing:'1px'}}><center>Bundled Deals </center></h2></Row>
    <Row className="d-flex justify-content-center center-block d-block m-auto" style={{padding:"1em"}}>
    <Col xs={10} sm={10} > <p style={{letterSpacing:'1px'}}> <center>The more you travel, the more you save. TravelBuddy ensures that you stretch every dollar to fulfil your vacation dreams. </center> </p></Col> 


        
        </Row>


    </Col>
    <Col> </Col>


  </Row>

</Container> 
</Fragment> 
  );
};

export default Infographic; 
