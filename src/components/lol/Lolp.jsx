import React, { useState } from "react"
import { lolp } from "../../dummyData"
// import "./hero.css"
// import Card from "./Card"

const Lolp = () => {
  const [items, setIems] = useState(lolp)
  console.log('lolp')
  return (
    <>
      <section className='hero'>
        <h1 style={{color:"yellow"}}>hii</h1>hii
        <div className='container'>
          {items.map((item) => {
            return (
              <>
                 <p>hii</p>
                {/* <Card key={item.post_id} item={item} /> */}
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Lolp
