import InfoAbout from './aboutComponent/InfoAbout';
import { FaCode } from "react-icons/fa";


const About = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 my-20  md:mt-0'>
            <div className="flex flex-row items-center justify-center text-white text-2xl mb-4 underline">
        <FaCode/>
      <p> Sobre mí</p>
      </div>
      <InfoAbout />
    </div>
  );
};

export default About;
