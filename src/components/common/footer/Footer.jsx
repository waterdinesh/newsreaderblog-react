import React from "react"
import "./footer.css"
import hero1img from '../../../images/hero/hero1.jpg';
import hero2img from '../../../images/hero/hero2.jpg';
import hero3img from '../../../images/hero/hero3.jpg';
import logofooterimg from '../../../images/tech-logo-footer.png';
const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            {/* <img src='../images/tech-logo-footer.png' alt='' className="boxlogoimg" /> */}
            <img src={logofooterimg} alt='' className="boxlogoimg" />
            <p>Search, watch, and cook every single Tasty recipe and video ever - all in one place!</p>
            <i className='fa fa-envelope'></i>
            <span> dinesh14@gmail.com </span> <br />
            <i className='fa fa-headphones'></i>
            <span> +91 9653606489</span>
          </div>
          <div className='box'>
            <h3>NEWS</h3>
            <div className='item'>
              {/* <img src='../images/hero/hero1.jpg' alt='' /> */}
              <img src={hero1img} alt='' />
              <p>Amitabh Bachchan sings 'Tu Cheez Badi Hai Musk Musk' for restored blue tick</p>
            </div>
            <div className='item'>
              {/* <img src='../images/hero/hero2.jpg' alt='' /> */}
              <img src={hero2img} alt='' />
              <p>The Ingredients You're Unlikely To Find In Traditional Indian Food</p>
            </div>
          </div>
          <div className='box'>
            <h3>STORIES</h3>
            <div className='item'>
              {/* <img src='../images/hero/hero3.jpg' alt='' /> */}
              <img src={hero3img} alt='' />
              <p>When I look at your eyes I didn't see just you.I saw my Future For rest of life </p>
            </div>
            <div className='item'>
              {/* <img src='../images/hero/hero1.jpg' alt='' /> */}
              <img src={hero1img} alt='' />
              <p>Twitter Blue tick: Amitabh Bachchan’s message to Twitter “bh..</p>
            </div>
          </div>
          <div className='box'>
            <h3>LABELS</h3>
            {/*<i className='fa fa-chevron-right'></i>*/}
            <ul>
              <li>
                <span>Boxing</span> <label>(5)</label>
              </li>
              <li>
                <span>Fashion</span> <label>(6)</label>
              </li>
              <li>
                <span>Health</span> <label>(7)</label>
              </li>
              <li>
                <span>Nature</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
          <p>© all rights reserved</p>
          <p>
            made with <i className='fa fa-heart'></i> by dinesh
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
