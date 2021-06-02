import React from "react"
import CardComponent from "../layout/CardComponent";
import Infographic from "../layout/Infographic";
import Banner from "../layout/Banner";

const Home = () => {
    return (
        <> 
        <div style={{height:"100%", backgroundColor:"#F2F3F3"}}> 
        <Banner imageurl={"url(https://images.unsplash.com/photo-1613288092085-eb081fde1509?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80)"} backgroundPos ={"50% 35%"} secondaryText={"deals"}/>
        <Infographic/> 
        <CardComponent/>
        </div>
        </> 


    )
}
export default Home; 