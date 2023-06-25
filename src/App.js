import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import SinglePage from "./components/singlePage/SinglePage"
import Culture from "./components/culture/Culture"
import Story from "./components/Storie/Story"
import Viewstory from "./components/Storie/Viewstory"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepages} />
          <Route path='/singlepage/:id' exact component={SinglePage} />
          <Route exact path='/culture' component={Culture} />
          <Route exact path='/story' component={Story} />
          <Route path='/viewstory/:id' exact component={Viewstory} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
