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
            {socialItems}
        </div>
        
  )
}

export default SocialMedia