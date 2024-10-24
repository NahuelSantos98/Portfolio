import About from "../components/About";
import Banner from "../components/Banner";
// import Experience from "../components/Experience";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 min-h-screen"> {/* Fondo con degradado */}
      <header className="sticky z-10 top-0 ">
        <Navbar />
      </header>

      <section id="top">
        <Banner />
      </section>

      {/* <section id="experience" className="px-4"> 
        <Experience />
      </section> */}
      <div id="projects"></div>
      <section className="px-4 mt-20"> 
        <Projects />
      </section>

      <section id="about" className="px-4"> 
        <About />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
