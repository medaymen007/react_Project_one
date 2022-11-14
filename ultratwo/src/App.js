import React from "react";
import NevBar from "./allComponent/nevBar";
import Index from "./allComponent/index";
import Contact from "./allComponent/contact";
import {BrowserRouter ,Switch,Route } from "react-router-dom"



    
 function App(){
    return(
<BrowserRouter>
   <NevBar/>
    <Switch>
       <Route exact path="/" component={Index}/>
       <Route path="/contact" component={Contact}/>
    </Switch>
</BrowserRouter>
    )
  }

  

export default App;
