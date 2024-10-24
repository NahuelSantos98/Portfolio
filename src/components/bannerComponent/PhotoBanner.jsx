import presentation from '../../utils/Nahuel.jpeg';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const PhotoBanner = () => {
    return (
        <div className="mt-4 flex flex-col items-center self-center">
            <div>
                <img src={presentation} alt='Nahuel Santos Presentation Image' className='rounded-full w-72 h-72 object-cover' />
            </div>
            <div className="mt-4 flex gap-8">
                <a href='https://github.com/NahuelSantos98'><FaGithub className='text-white text-3xl' /></a>
                <a href='https://www.linkedin.com/in/nahuel-santos-1295b0295/'><FaLinkedin className='text-white text-3xl' /></a>
                <a href='mailto:nahuelmsantos@gmail.com'><IoMdMail className='text-white text-3xl' /></a>
            </div>
        </div>
    );
};

export default PhotoBanner;
