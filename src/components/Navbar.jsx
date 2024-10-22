import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <nav className="bg-black border-b-2 border-gray-500 lg:border-none">
            <section className="mx-auto px-4 sm:px-6 lg:px-4 lg:py-2">
                <section className="flex items-center justify-between h-16">
                    <article className="flex items-center">
                        <div className="flex-shrink-0">
                            <a href="/" className="text-white text-lg font-bold">Nahuel Santos</a>
                        </div>
                    </article>
                    <article className="hidden md:block">
                        <div className=" text-center flex items-center space-x-4">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `text-white hover:bg-white hover:text-black rounded-lg p-2 ${isActive ? "font-bold" : ""}`
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/"
                                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                            >
                                Experience
                            </NavLink>
                            <NavLink
                                to="/"
                                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                            >
                                Projects
                            </NavLink>
                            <NavLink
                                to="/"
                                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                            >
                                About Me
                            </NavLink>
                        </div>
                    </article>
                    <article className="hidden md:flex items-center space-x-4">
                        <button className="text-white border border-white rounded-lg p-2 hover:bg-white hover:text-black">
                            Descargar CV
                        </button>
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
                        <button className="text-white w-[90vw] border border-white rounded-lg p-2 hover:bg-white hover:text-black mb-2">
                            Descargar CV
                        </button>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">Home</a>
                        <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">Experience</a>
                        <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">Projects</a>
                        <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">About Me</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
