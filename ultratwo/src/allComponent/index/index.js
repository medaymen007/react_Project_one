import React from "react";
import Home from "../home"
import About from "../about";
import Footer from "../footer"
import Portfolio from "../portfolio";
import SocialMedia from "../socialMedia";
import Profile from "../profile";
import Work from "../work";

function Index() {
  return (
    <div className="App">
     <Home/>
     <Work/>
     <Portfolio/>
     <Profile/>
     <About/>
     <SocialMedia/>
     <Footer/>
          
      
    </div>
  );
}

export default Index;
