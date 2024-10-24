import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-lg mb-2 md:mb-0">Nahuel Martin Santos</span>
        <div className="flex space-x-4 items-center">
          <a 
              href="/CV Nahuel Martin Santos.pdf" 
              download="CV Nahuel Martin Santos" 
              className="text-white border border-white rounded-lg p-2 my-4 hover:bg-gray-700"
          >
            Descargar CV
          </a>
          <a 
              href="https://github.com/NahuelSantos98" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-400"
          >
            <FaGithub className='text-white text-3xl md:text-4xl' />
          </a>
          <a 
              href="https://www.linkedin.com/in/nahuel-santos-1295b0295/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-400"
          >
            <FaLinkedin className='text-white text-3xl md:text-4xl' />
          </a>
          <a 
              href="mailto:nahuelmsantos@gmail.com" 
              className="hover:text-gray-400"
          >
            <IoMdMail className='text-white text-3xl md:text-4xl' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
