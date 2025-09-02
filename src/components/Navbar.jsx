import { useEffect, useState } from "react";
import { CgMenu } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { HashLink as Link } from "react-router-hash-link";
import { handleSmoothScroll, handleScrollHome } from "../utils/handleSmoothScroll";

const links = [
  { id: "top", label: "Inicio" },
  { id: "about", label: "Sobre mí" },
  { id: "studies", label: "Estudios" },
  { id: "experience", label: "Experiencia" },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [activeId, setActiveId] = useState("top");

  // ---- ScrollSpy con IntersectionObserver
// Altura aproximada de tu header sticky (ajustá si cambia)
const HEADER_OFFSET = 64; // px

// actualiza activo según el scroll actual
const computeActiveSection = () => {
  const y = window.scrollY;
  const vh = window.innerHeight;

  // línea de lectura: un poquito por debajo del header + 35% del viewport
  const probe = y + HEADER_OFFSET + vh * 0.35;

  let current = "top";
  for (const l of links) {
    const el = document.getElementById(l.id);
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    const bottom = top + el.offsetHeight;

    if (probe >= top && probe < bottom) {
      current = l.id;
      break;
    }
  }
  return current;
};

useEffect(() => {
  // set inicial
  setActiveId(computeActiveSection());

  const onScroll = () => {
    setActiveId((prev) => {
      const next = computeActiveSection();
      return next === prev ? prev : next;
    });
  };

  const onResize = () => {
    // al cambiar tamaño recalculamos
    setActiveId(computeActiveSection());
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResize);
  };
}, []);


  const baseLink =
    "relative inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-colors";
  const inactive =
    "text-gray-200/90 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30";
  const active = "text-white bg-white/10";

  const onClickLink = (e, id) => {
    if (id === "top") {
      handleScrollHome(e);
    } else {
      handleSmoothScroll(e, id);
    }
    setShowNav(false);
  };

  const navBg =
    "bg-black/60 supports-[backdrop-filter]:bg-black/50 backdrop-blur border border-white/10";

  return (
    <nav className={`w-full ${navBg}`}>
      {/* Contenedor */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Barra */}
        <div className="flex h-16 items-center justify-between">
          {/* Marca */}
          <div className="flex items-center">
            <a
              href="#"
              onClick={handleScrollHome}
              className="text-white font-semibold tracking-wide text-base md:text-lg hover:opacity-90"
            >
              Nahuel Martín Santos
            </a>
          </div>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-1 py-1">
              {links.map((l) => (
                <Link
                  key={l.id}
                  to={`#${l.id}`}
                  onClick={(e) => onClickLink(e, l.id)}
                  className={`${baseLink} ${
                    activeId === l.id ? active : inactive
                  }`}
                >
                  {l.label}
                  {activeId === l.id && (
                    <span className="absolute inset-0 -z-10 rounded-xl ring-1 ring-white/10" />
                  )}
                </Link>
              ))}
            </div>

            <a
              href={`${import.meta.env.BASE_URL}cv-nahuel-santos.pdf`}
              download="CV Nahuel Martin Santos"
              className="
                ml-3 inline-flex items-center justify-center rounded-xl
                border border-white/15 bg-gradient-to-r from-sky-500/20 to-blue-600/20
                px-3.5 py-2 text-sm font-medium text-white
                hover:from-sky-500/30 hover:to-blue-600/30
                transition-all shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]
                active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30
              "
            >
              Descargar CV
            </a>
          </div>

          {/* Botón mobile */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Abrir menú"
              className="inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/10"
              onClick={() => setShowNav((s) => !s)}
            >
              {showNav ? (
                <RxCross2 className="text-2xl" />
              ) : (
                <CgMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Panel mobile */}
      <div
        className={`md:hidden origin-top transition-all duration-200 ease-out ${
          showNav
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-black/70 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 pb-4 pt-2">
            <div className="flex items-center justify-center pb-3">
              <a
                href={`${import.meta.env.BASE_URL}cv-nahuel-santos.pdf`}
                download="CV Nahuel Martin Santos"
                className="w-full text-white text-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10 transition"
              >
                Descargar CV
              </a>
            </div>
            <div className="grid gap-2">
              {links.map((l) => (
                <Link
                  key={l.id}
                  to={`#${l.id}`}
                  onClick={(e) => onClickLink(e, l.id)}
                  className={`${baseLink} ${
                    activeId === l.id ? active : inactive
                  } w-full justify-center bg-white/[0.06]`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
