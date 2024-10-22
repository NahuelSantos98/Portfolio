import Banner from "../components/Banner";
import Experience from "../components/Experience";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="h-full">
      <header>
        <Navbar />
      </header>

      <section className="px-4">
        <article>
          <Banner />
        </article>

        <article>
          <Experience />
        </article>

        <article>
          <Projects />
        </article>
      </section>
    </div>
  );
};

export default Home;
