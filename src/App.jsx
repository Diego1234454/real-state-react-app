import React from 'react'
import Header from "./Components/Header.jsx";
import About from "./Components/About.jsx";
import Projects from "./Components/Projects.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";


const App = () => {
    return (
        <div className="w-full overflow-hidden">
            <Header/>
            <About/>
            <Projects/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </div>
    )
}
export default App
