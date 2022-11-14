import React ,{useState,useEffect}from 'react'
import "./style.css"
import axios from "axios"

function Work() {
 const [tabWork,setWork]=useState([]);
 useEffect(()=>{(axios.get("js/data.json").then((elm)=>{setWork(elm.data.works)}))})
const workItems=tabWork.map((elm)=>{
  return(
    <div className="part first" key={elm.id}>
    <i className={elm.icon_name}></i>
    <h4 className="part-title">{elm.title}</h4>
    <hr className="line"/>
    <p className="part-desc">{elm.body}</p>
</div>
  )
})

  return (
    <div>
      <div className="work">
            <div className="container">
                <h2 className="work-title"><span>My</span> Work</h2>
               {workItems}
                
            </div>
        </div>
    </div>
  )
}

export default Work