import React from "react";
import FooterComponent from "./FooterComponent";
import Cards from './Cards'
import MainComponent from "./MainComponent";
import MemberComponent from "./MemberComponent";

export const HomeComponent =()=>(
        <>
         <br></br>
         <hr></hr>
         <br></br>
      <MainComponent></MainComponent>
        <hr></hr>
        <br></br>
        <br></br>
        <Cards></Cards>   
        <br></br>
        <br></br>
      <MemberComponent></MemberComponent>
             
        </>
);

export default HomeComponent;