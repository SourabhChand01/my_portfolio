import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";

const App=()=>{
  return(
    <div className="container mx-auto max-w-7xl w-screen">
      <Navbar/>
      <Hero/>
      
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>

  )
}
export default App;