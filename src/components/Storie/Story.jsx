import React, { useState } from "react"
import { lolp } from "../../dummyData"
import './story.css'
import { Link } from "react-router-dom"
 

const Story = () => {
    //console.log("hii")
    const [items, setIems] = useState(lolp)
  console.log(items)
  return (
  
    <div className='container'>
       <h1 className="h1c">Read the Full story detail and enjoy it</h1>
         <div className="boxwrapty">
         {items.map((item) => {
      return (
        <div className="boxty">
            <Link to={`viewstory/${item.post_id}`}>
              <div className="storybookimg"> <img src={item.cover} alt=""   />  </div>
           
           <h1>{item.post_id}</h1> 
           <h2>{item.post_name}</h2>
           </Link>
            </div>
          
        
      )
    })}
        </div>
   
  </div>
  )
}

export default Story