import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";

const CATEGORY_STYLES = {
    frontend:
        "hidden md:block bg-sky-500/90 text-white border border-sky-400/60 hover:bg-sky-500/100",
    backend:
        "hidden md:block bg-emerald-500/90 text-white border border-emerald-400/60 hover:bg-emerald-500/100",
    database:
        "hidden md:block bg-amber-400/90 text-black border border-amber-300/70 hover:bg-amber-400/100",
};

const ORDER = ["frontend", "backend", "database"];

const CardProject = ({ item }) => {
    const { name, description, img, link, githubRepository, tech } = item;

    return (
        <article
            className="
        group relative overflow-hidden rounded-2xl
        bg-gray-900/60 backdrop-blur
        border border-white/10
        shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_30px_rgba(0,0,0,0.5)]
        transition-transform duration-300 ease-out hover:-translate-y-1
        w-full max-w-[90vw] md:max-w-[48rem] lg:max-w-[68rem] mx-auto"
        >
            {/* Glow de borde al hover */}
            <span
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(1200px_200px_at_50%_-10%,rgba(59,130,246,0.25),transparent)]"
            />

            {/* Imagen */}
            <div className="relative w-full overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
                <img
                    src={img}
                    alt={`Image of the project ${name}`}
                    className="
            h-56 w-full 
            object-cover object-center
            transition-transform duration-700 ease-out 
            group-hover:scale-105
          "
                    loading="lazy"
                />

                {/* Badges de tecnologías (arriba a la izquierda) */}
                {tech && (
                    <div className="absolute left-3 top-3 right-3 flex flex-wrap gap-2">
                        {ORDER.filter((k) => tech?.[k]?.length).map((category) => (
                            <div
                                key={category}
                                className="flex items-center flex-wrap gap-2"
                            >

                                {/* Chips por tecnología */}
                                {tech[category].map((t) => (
                                    <span
                                        key={`${category}-${t}`}
                                        className={`
                      rounded-full px-2.5 py-1 text-[11px] font-medium
                      ${CATEGORY_STYLES[category] || "bg-white/10 text-white/90 border border-white/15"}
                      transition-colors
                    `}
                                        title={`${category}: ${t}`}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                )}

                {/* Degradé para lectura sobre la imagen */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-900/80 to-transparent" />
            </div>

            {/* Contenido */}
            <div className="relative z-[1] p-6 md:p-7">
                <header className="flex items-start justify-between gap-4">
                    <h3 className="text-white text-2xl md:text-[26px] font-semibold tracking-wide">
                        {name}
                    </h3>

                    {/* Acciones compactas (iconos) en desktop */}
                    <div className="hidden md:flex items-center gap-2">
                        {githubRepository && (
                            <a
                                href={githubRepository}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                  inline-flex items-center justify-center rounded-lg border border-white/10
                  bg-white/5 px-3 py-2 text-white hover:bg-white/[0.08]
                  transition-colors
                "
                                aria-label="Repositorio en GitHub"
                            >
                                <FaGithub className="text-xl" />
                            </a>
                        )}
                        {link && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                  inline-flex items-center gap-2 rounded-lg
                  bg-blue-600 hover:bg-blue-500
                  px-4 py-2 text-sm font-medium text-white
                  transition-colors
                "
                            >
                                Ver proyecto
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="size-4"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 10a1 1 0 011-1h8.586L9.293 5.707a1 1 0 111.414-1.414l5.5 5.5a1 1 0 010 1.414l-5.5 5.5a1 1 0 11-1.414-1.414L12.586 11H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        )}
                    </div>
                </header>

                <p className="mt-3 text-gray-300 leading-relaxed">{description}</p>

                {/* Acciones grandes en mobile */}
                <div className="mt-6 flex md:hidden flex-col sm:flex-row gap-3">
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                flex-1 inline-flex items-center justify-center gap-2 rounded-lg
                bg-blue-600 hover:bg-blue-500 px-4 py-2.5
                text-white font-medium transition-colors
              "
                        >
                            Ver proyecto
                        </a>
                    )}
                    {githubRepository && (
                        <a
                            href={githubRepository}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                flex-1 inline-flex items-center justify-center gap-2 rounded-lg
                border border-white/10 bg-white/5 hover:bg-white/[0.08]
                px-4 py-2.5 text-white transition-colors
              "
                        >
                            <FaGithub className="text-xl" />
                            Repositorio
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

CardProject.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        link: PropTypes.string,
        githubRepository: PropTypes.string,
        tech: PropTypes.shape({
            frontend: PropTypes.arrayOf(PropTypes.string),
            backend: PropTypes.arrayOf(PropTypes.string),
            database: PropTypes.arrayOf(PropTypes.string),
        }),
    }).isRequired,
};

export default CardProject;
