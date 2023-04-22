
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {

  return (
      <div className="page">
        <Header />
        <main id="main">
          <section id="about">
          <About/>
          </section>
          <section id="projects">
          <Projects/>
          </section>
          <section id="education">
          <Education/>
          </section>
          <section id="skills">
          <Skills/>
          </section>
        </main>    
        <Footer />
      </div>
  );
}

