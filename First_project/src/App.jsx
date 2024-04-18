import React from 'react'
import Nav from './componants/Nav'
import Footer from './componants/Footer';
import Section from './componants/Section';
import Child from './componants/Child';


const App = () => {
  return (
    <div>
     <Nav></Nav>
     <Section></Section>
     <Footer></Footer>
     <Child username = "Suman" city = "Noida" country = "india "></Child>
    </div>
  )
}

export default App