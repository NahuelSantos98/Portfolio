import { FaGithub } from "react-icons/fa";

const CardProject = ({ item }) => {
    const { name, description, img, link, githubRepository } = item;

    return (
        <div className="flex flex-col md:flex-row bg-zinc-800 rounded-lg shadow-md p-4 mt-4 w-full max-w-[90vw] md:max-w-[50rem] mx-auto lg:max-w-[70vw]"> {/* Ajustado max-w */}
            <div className="flex-shrink-0 self-center">
                <img
                    src={img}
                    alt={`Image of the project ${name}`}
                    className="rounded-lg w-72 h-48 object-cover"
                />
            </div>
            <div className="mt-4 md:mt-0 md:ml-4 flex flex-col justify-between">
                <div>
                    <p className='text-white text-xl font-semibold'>{name}</p>
                    <p className='text-white mt-2 text-justify'>{description}</p>
                </div>
                <div className='w-full flex justify-center items-center gap-8'>
                    {link &&
                        <a
                            href={link}
                            className={`mt-4 text-white bg-gray-700 hover:bg-gray-800 rounded-lg px-4 py-2 text-center ${!githubRepository ? "lg:w-full" : 'lg:w-[50%]'}`}
                        >
                            Ir a la web
                        </a>
                    }
                    {githubRepository &&
                        <a
                            href={githubRepository}
                            className={`mt-4 flex justify-center items-center text-white text-center bg-gray-700 hover:bg-gray-800 rounded-lg px-4 py-2 text-2xl ${!link ? "lg:w-full" : 'lg:w-[50%]'}`}
                        >
                            <FaGithub />
                        </a>
                    }
                </div>
            </div>
        </div>
    );
};

export default CardProject;
