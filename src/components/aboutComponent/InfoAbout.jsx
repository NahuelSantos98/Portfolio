import TechCard from "./DisplayLogos";
import { frontend, backend } from "../../utils/info";

const InfoAbout = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-12 gap-6 items-stretch">
        {/* Columna izquierda: bio */}
        <article className="col-span-12 xl:col-span-5">
          <div className="h-full rounded-2xl border border-white/10 bg-gray-900/70 backdrop-blur p-5 md:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <div className="mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-sky-400/80 to-blue-500/80" />

            <p className="text-gray-200/95 leading-relaxed">
              Soy <span className="font-semibold text-white">Nahuel Martín Santos</span>, desarrollador web orientado a{" "}
              <span className="font-medium text-white">Front-End</span> y{" "}
              <span className="font-medium text-white">Back-End</span>. Me motiva convertir ideas en productos{" "}
              <span className="font-medium">rápidos, claros y mantenibles</span>, sumando valor desde el primer día en un entorno profesional.
              Trabajo con <span className="font-medium">Scrum</span> y <span className="font-medium">Design Thinking</span>,
              incorporando mirada <span className="font-medium">UX/UI</span> para interfaces simples y usables.
            </p>

            <ul className="mt-4 space-y-2 text-gray-300">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400/90" />
                Enfoque en mantenibilidad: arquitectura clara y buenas prácticas.
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400/90" />
                Comunicación y trabajo colaborativo para avanzar parejo con el equipo.
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400/90" />
                Aprendizaje continuo y adaptación rápida a nuevas tecnologías.
              </li>
            </ul>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-gray-200 text-sm leading-relaxed text-center">
                <span className="font-semibold text-white">Listo para aportar desde el día uno.</span>
              </p>
            </div>
          </div>
        </article>

        {/* Columna derecha: stack */}
        <article className="col-span-12 xl:col-span-7">
          <div className="grid grid-cols-12 gap-6 items-stretch">
            <div className="col-span-12 lg:col-span-6">
              <TechCard title="Front-End" logos={frontend} />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <TechCard title="Back-End" logos={backend} />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default InfoAbout;
