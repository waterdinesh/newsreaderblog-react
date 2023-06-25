import React from "react";
import "../header/head.css";
import logoimg from '../../../images/logo.png'
import headerbbimg from '../../../images/headerbb.jpeg'

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB paddingTB'>
          <div className='logo'>
            {/* <img src='../images/logoo.png' alt='' /> */}
            <img src={logoimg} alt='' />
          </div>
          <div className='ad'>
            {/* <img src='../images/headerbb.jpeg' alt='' className="adimg" /> */}
            <img src={headerbbimg} alt='' className="adimg" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
