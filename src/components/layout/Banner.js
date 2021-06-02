import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Banner = (props) => {
    const {imageurl, backgroundPos, secondaryText } = props;

  return (
   <div className="header" style={{color:"white"}}> 
   <Container fluid className="banner-div"
   style={{backgroundImage:`${imageurl}`,backgroundPosition: `${backgroundPos}`}}
   > 
    <Row style={{paddingTop:"6rem"}}>
    <Col xs={1} sm={0} md={1} lg={0} xl={2}></Col>
       <h1 style={{color:"white"}}> Clubhouse Analytics </h1> 
       </Row>

       <Row>
       <Col xs={1} sm={0} md={1} lg={0} xl={2}></Col>
       <h3 className="banner-text-secondary"> Track and monitor detailed analytics for your  <u style={{fontWeight:"bolder", opacity:"0.85"}}> Clubhouse shows.</u> </h3> 
       <Col xs={2} xl={0}> </Col>
       </Row>


  </Container>
   </div>
  );
};

export default Banner; 