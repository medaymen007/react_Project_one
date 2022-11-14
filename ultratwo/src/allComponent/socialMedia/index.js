import React ,{useState,useEffect}from 'react'
import "./style.css"
import axios from 'axios'

function SocialMedia() {
  const [tabSocial,setSocial]=useState([])
  useEffect(()=>{
    axios.get("js/data.json").then((elm)=>{setSocial(elm.data.social)})
  })
  const socialItems=tabSocial.map((elm)=>{
    return(
            
      <div className={elm.body}>
          <i className={elm.icon}></i>
          <p>
              <span className="info1">{elm.title}</span>
              <span className="info2">{elm.body}</span>
          </p>
      </div>
    )
  })
  return (
    
            <div className="socialMedia">
            <div className="social face">
            <i className="icon fa-brands fa-facebook fa-lg"></i>

                <p>
                    <span className="info1">Follow Me on</span>
                    <span className="info2">Social Facebook</span>
                </p>
            </div>
            
            <div className="social twitter">
                <i className="icon fa-brands fa-twitter fa-lg"></i>
                <p>
                    <span className="info1">Tweet Me on</span>
                    <span className="info2">Social twitter</span>
                </p>
            </div>
            
            <div className="social pin">
                <i className="icon fa-brands fa-pinterest fa-lg"></i>
                <p>
                    <span className="info1">Pin Me on</span>
                    <span className="info2">Social Pinterest</span>
                </p>
            </div>
        </div>
      
        
  )
}

export default SocialMedia