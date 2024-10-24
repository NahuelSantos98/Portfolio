import { useState, useEffect } from "react";
import { CgMenu } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { HashLink as Link } from "react-router-hash-link";
import { handleSmoothScroll, handleScrollHome } from "../utils/handleSmoothScroll";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return (
        <nav className={`transition-all duration-300 ${showNav || (isScrolled && 'md:bg-black')} bg-black md:bg-transparent opacity-90 sm:mb-4 border-b-2 border-gray-500 md:border-none lg:border-none`}>
            <section className="mx-auto px-4 sm:px-6 lg:px-4 lg:py-2">
                <section className="flex items-center justify-between h-16">
                    <article className="flex items-center">
                        <div className="flex-shrink-0">
                            <a href="#" onClick={handleScrollHome} className="text-white text-lg font-bold">Nahuel Martin Santos</a>
                        </div>
                    </article>
                    <article className="hidden md:block">
                        <div className="text-center flex items-center space-x-4">
                            <Link
                                to="#"
                                className="text-white hover:bg-gray-700 rounded-lg p-2"
                                onClick={(e) => handleScrollHome(e)}
                            >
                                Home
                            </Link>
                            <Link
                                to="#projects"
                                className="text-white hover:bg-gray-700 rounded-lg p-2"
                                onClick={(e) => handleSmoothScroll(e, "projects")}
                            >
                                Projects
                            </Link>
                            <Link
                                to="#about"
                                className="text-white hover:bg-gray-700 rounded-lg p-2"
                                onClick={(e) => handleSmoothScroll(e, "about")}
                            >
                                About Me
                            </Link>
                        </div>
                    </article>
                    <article className="hidden md:flex items-center space-x-4">
                        <a href="/CV Nahuel Martin Santos.pdf" download="CV Nahuel Martin Santos" className="text-white border border-white rounded-lg p-2 hover:bg-gray-700 hover:text-white active:scale-90 mb-2 text-center transition-[background] duration-300 ease-in-out">
                            Descargar CV
                        </a>
                    </article>
                    <article className="md:hidden flex items-center">
                        <button
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => setShowNav(!showNav)}
                        >
                            {!showNav ? <CgMenu className="text-2xl" /> : <RxCross2 className="text-2xl" />}
                        </button>
                    </article>
                </section>
            </section>
            {showNav && (
                <div className="md:hidden">
                    <div className="flex items-center justify-center">
                    <a className="text-white w-[90vw] border border-white rounded-lg p-2 hover:bg-gray-700 mb-2 active:scale-none transition-all duration-300 ease-in-out">                            Descargar CV
                        </a>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link 
                            to="#"
                            className="text-white block hover:bg-gray-700 rounded-lg p-2"
                            onClick={(e) => handleSmoothScroll(e, "top")}
                        >
                            Home
                        </Link>
                        <Link 
                            to="#projects"
                            className="text-white block hover:bg-gray-700 rounded-lg p-2"
                            onClick={(e) => handleSmoothScroll(e, "projects")}
                        >
                            Projects
                        </Link>
                        <Link 
                            to="#about"
                            className="text-white block hover:bg-gray-700 rounded-lg p-2"
                            onClick={(e) => handleSmoothScroll(e, "about")}
                        >
                            About Me
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
