import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/quizzes'>Quizzes</Link>
              </li>
              <li>
                <Link to='/tv & movies'>TV & Movies</Link>
              </li>
              <li>
                <Link to='/shopping'>Shopping</Link>
              </li>
              <li>
                <Link to='/news'>News</Link>
              </li>
              <li>
                <Link to='/tasty'>Tasty</Link>
              </li>
              <li>
                <Link to='/reviews'>Reviews</Link>
              </li>
              <li id="iconnavy">
                <Link to='/story' id="iconnavytext">Lol</Link>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
