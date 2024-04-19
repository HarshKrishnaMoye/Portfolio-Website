import "./App.scss"
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Project from "./components/Projects/Project";
import Reference from "./components/References/Reference";
import Skills from "./components/Skills/Skills";

const App = () => {
  return <div>
     <Cursor/>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="About"><About/></section>
    <section id="Skills"><Parallax type="Skills"/></section>
    <section><Skills/></section>
    <section id="Projects"><Parallax type="Project"/></section>
    <Project/>
    <section><Reference/></section>
    <section id="Contact"><Contact/></section>
  </div>;
};

export default App;
