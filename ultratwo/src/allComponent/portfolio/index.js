import React,{useState,useEffect} from 'react'
import axios from 'axios'
import "./style.css"

function Portfolio() {
  const [tabImages,setTabImage]=useState([]);
  useEffect(()=>{
    axios.get("js/data.json").then((elm)=>{setTabImage(elm.data.portfolio)})
  })

  const portfolioItems=tabImages.map((elm)=>{
    return(
      <div key={elm.id}>
           <img src={elm.image} alt=""/>
              <p className="overlay">
                <span>
                  Show Image
                </span>
              </p>
          </div>
    )
  })

  return (
    <div>
       <div className="portfolio">
            <h2 className="portfolio-title"><span>My</span> Portfolio</h2>
            <ul className="portfolio-list">
                <li className="portfolio-item active">All</li>
                <li className="portfolio-item">HTML</li>
                <li className="portfolio-item">Photoshop</li>
                <li className="portfolio-item">Wordpress</li>
                <li className="portfolio-item">Mobile</li>
            </ul>
            
            <div className="box">
                {portfolioItems}            
            </div>
            
        </div>
    </div>
  )
}

export default Portfolio