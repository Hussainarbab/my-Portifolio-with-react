import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import MyWork from "./components/MyWork/MyWork";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import { inject } from "@vercel/analytics";



function App() {
  return (
   
    <>
    
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <MyWork/>
    <Contact/>
    <Footer/>
    </>
  );
}


inject();


export default App;
