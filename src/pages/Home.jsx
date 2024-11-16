import About from "../components/About";
import Banner from "../components/Banner";
import Studies from "../components/Studies";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className=" min-h-screen">
      <header className="sticky z-10 top-0 ">
        <Navbar />
      </header>

      <section id="top">
        <Banner />
      </section>

      <section id="about" className="px-4">
        <About />
      </section>

      <section id="studies" className="px-4">
        <Studies />
      </section>

      <section id="experience" className="px-4 my-20">
        <Experience />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
