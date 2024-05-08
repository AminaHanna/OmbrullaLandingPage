import React from 'react'
import HomePage1 from './HomePage1'
import HomePage2 from './HomePage2'
import HomePage3 from './HomePage3'
import HomePage4 from './HomePage4'
import HomePage6 from './HomePage6'
import HomePage10 from './HomePage10'
import Footer from '../Footer/Footer'
import HomePage5 from './HomePage5'
import HomePage8 from './HomePage8'
import HomePage9 from './HomePage9'
import HomePage7 from './HomePage7'
import NavBar from '../Header/Navbar'

function HomePage() {
  return (
    <>
    <div className="HeaderPart">
        {/* <Header/> */}
        <NavBar/>
        <HomePage1/>
    </div>
    <HomePage2/>
    <HomePage3/>
    <HomePage4/>
    <HomePage5/>
    <HomePage6/>
    <HomePage7/>
    <HomePage8/>
    <div className="hidden sm:block">
      <HomePage9/>
    </div>
    <HomePage10/>
    <Footer/>
    </>
  )
}

export default HomePage
