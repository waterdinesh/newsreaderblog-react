import React, { useState } from "react"
import { useParams } from 'react-router-dom';
import { lolp } from "../../dummyData";
import "./viewstory.css"
import Side from "../home/sideContent/side/Side.jsx"

const Viewstory = () => {
    const [items, setIems] = useState(lolp)
    const {id}=useParams()
    console.log(id)
  return (
    <div>
        {items.filter((item)=>{
            return item.post_id === id
        }).map((val)=>{
            return (
                <div className="allview">
                  <section className="viewleft">
                  <h1>{val.post_name}</h1>
                  <div className="viewleftimg">
                  <img src={val.story_image} alt=""  />
                    </div> 
                 
                  <p>{val.post_desc}</p>
                  </section>
                  <section className='sideContent'>
                 <Side />
               </section>
                </div>
                
            )

        })}
    </div>
  )
}

export default Viewstory