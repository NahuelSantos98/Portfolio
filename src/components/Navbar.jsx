import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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

const HEADER_OFFSET_FALLBACK = 64;

// --- sección activa por posición (robusto con headers sticky)
const computeActiveSection = () => {
  const y = window.scrollY;
  const vh = window.innerHeight;
  const probe = y + HEADER_OFFSET_FALLBACK + vh * 0.35;

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

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [activeId, setActiveId] = useState("top");
  const [navHeight, setNavHeight] = useState(HEADER_OFFSET_FALLBACK);

  const navRef = useRef(null);
  const panelRef = useRef(null);
  const btnRef = useRef(null);

  // medir altura real del nav para posicionar el dropdown
  useLayoutEffect(() => {
    const measure = () => {
      if (navRef.current) {
        const h = navRef.current.getBoundingClientRect().height;
        setNavHeight(Math.max(HEADER_OFFSET_FALLBACK, Math.round(h)));
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (navRef.current) ro.observe(navRef.current);
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);

  // scroll-spy
  useEffect(() => {
    setActiveId(computeActiveSection());
    const onScroll = () => {
      setActiveId((prev) => {
        const next = computeActiveSection();
        return next === prev ? prev : next;
      });
    };
    const onResize = () => setActiveId(computeActiveSection());
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // cerrar dropdown al click afuera
  useEffect(() => {
    if (!showNav) return;
    const onDocClick = (e) => {
      const p = panelRef.current;
      const b = btnRef.current;
      if (p && !p.contains(e.target) && b && !b.contains(e.target)) {
        setShowNav(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [showNav]);

  const baseLink =
    "relative inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-colors";
  const inactive =
    "text-gray-200/90 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30";
  const active = "text-white bg-white/10";

  const onClickLink = (e, id) => {
    if (id === "top") handleScrollHome(e);
    else handleSmoothScroll(e, id);
    setActiveId(id);
    setShowNav(false);
  };

  const navBg =
    "bg-black/60 supports-[backdrop-filter]:bg-black/50 backdrop-blur border border-white/10";

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav ref={navRef} className={`w-full ${navBg} z-[90]`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <a
                href="#"
                onClick={handleScrollHome}
                className="text-white font-semibold tracking-wide text-base md:text-lg hover:opacity-90"
              >
                Nahuel Martín Santos
              </a>
            </div>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-1">
              <div className="flex items-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-1 py-1">
                {links.map((l) => (
                  <Link
                    key={l.id}
                    to={`#${l.id}`}
                    onClick={(e) => onClickLink(e, l.id)}
                    className={`${baseLink} ${activeId === l.id ? active : inactive}`}
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
                ref={btnRef}
                aria-label={showNav ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={showNav}
                className={`
                  inline-flex items-center justify-center rounded-lg p-2 text-white 
                  transition-[transform,background] duration-200 ease-out
                  ${showNav ? "rotate-90 bg-white/10" : "hover:bg-white/10"}
                `}
                onClick={() => setShowNav((s) => !s)}
              >
                {showNav ? <RxCross2 className="text-2xl" /> : <CgMenu className="text-2xl" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ===== DROPDOWN MOBILE (bonita animación) ===== */}
      {showNav &&
        createPortal(
          <div
            ref={panelRef}
            className="md:hidden fixed left-0 right-0 z-[95] px-4"
            style={{ top: navHeight }}
          >
            <div
              className="
                mx-auto max-w-7xl
                rounded-2xl border border-white/12 bg-black/85 backdrop-blur
                shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.06)]
                overflow-hidden
                animate-menuDrop
              "
            >
              <div className="p-3">
                <a
                  href={`${import.meta.env.BASE_URL}cv-nahuel-santos.pdf`}
                  download="CV Nahuel Martin Santos"
                  className="
                    block text-center text-white rounded-xl border border-white/15 
                    bg-white/5 px-4 py-2 hover:bg-white/10 transition
                    animate-menuItem
                  "
                  style={{ animationDelay: "40ms" }}
                >
                  Descargar CV
                </a>

                <div className="mt-2 grid gap-2">
                  {links.map((l, i) => (
                    <Link
                      key={l.id}
                      to={`#${l.id}`}
                      onClick={(e) => onClickLink(e, l.id)}
                      className={`
                        ${baseLink} ${activeId === l.id ? active : inactive}
                        w-full justify-center bg-white/[0.06]
                        animate-menuItem
                      `}
                      style={{ animationDelay: `${80 + i * 60}ms` }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* glow suave debajo */}
            <div className="pointer-events-none mx-auto mt-2 h-6 max-w-7xl rounded-full bg-gradient-to-b from-sky-500/20 to-transparent blur-xl" />
          </div>,
          document.body
        )}

      {/* keyframes inline (no requiere tocar tailwind.config) */}
      <style>{`
        @keyframes menuDrop {
          0% { opacity: 0; transform: translateY(-8px) scale(0.98); filter: blur(4px); }
          60% { opacity: 1; transform: translateY(0) scale(1.01); filter: blur(0); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes menuItem {
          0% { opacity: 0; transform: translateY(-6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-menuDrop { animation: menuDrop 260ms cubic-bezier(.2,.8,.2,1) both; }
        .animate-menuItem { animation: menuItem 260ms cubic-bezier(.2,.8,.2,1) both; }
      `}</style>
    </>
  );
};

export default Navbar;
