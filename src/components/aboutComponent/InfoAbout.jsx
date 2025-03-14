import DisplayLogos from "./DisplayLogos";

const InfoAbout = () => {
  return (
    <section className="flex flex-col gap-4 md:items-center xl:flex-row justify-center">
      <div className="text-gray-200 text-left xl:w-[30%] bg-gray-800 p-4 rounded-lg max-w-[52rem] lg:h-full">
        <p>¡Hola! Soy Nahuel Martin Santos, un apasionado del desarrollo web en busca de oportunidades para iniciar mi carrera profesional en el ámbito del desarrollo Back-End y/o Front-End. Aunque actualmente no tengo experiencia laboral, estoy ansioso por aplicar mis conocimientos y habilidades en un entorno profesional.</p>
        <p>Además de mis habilidades técnicas, también estoy familiarizado con metodologías de trabajo ágiles, lo que me permite abordar los proyectos de manera eficiente y colaborativa. Soy un firme creyente en la importancia de la comunicación efectiva y la colaboración en equipo. Tambien sé manejarme en ambientes donde se trabaja con metodologías como Scrum.</p>
        <p>He trabajado con Design Thinking y UX/UI, por lo tanto puedo desarrollar y realizar diseños creativos e innovadores.</p>
        <p>Me esfuerzo para que cada día aprenda algo nuevo</p>
      </div>
      <div className="flex flex-col gap-4 md:items-center md:justify-center max-w-[52rem] w-full lg:h-full">
        <div className="text-gray-200 text-left w-full bg-gray-800 p-4 rounded-lg">
          <p>
            Soy una persona meticulosa y detallista, lo cual me permite trabajar en grupo con buenas prácticas, código legible y fácil de mantener.
          </p>
          <p>
            Gracias a que desde los 6 años he jugado al básquet, lo que me ha permitido desarrollar habilidades clave para trabajar en equipo, a comunicarme de manera eficaz, a fomentar un ambiente de trabajo de colaboración y, sobre todo, a trabajar en conjunto para alcanzar objetivos en común.
          </p>
          <p className="text-center font-bold underline mt-3">Por eso pienso que sumaría al equipo de trabajo.</p>
        </div>
        <article className="flex flex-col justify-center gap-8 lg:flex-row w-full">
          <DisplayLogos showFront={true} />
          <DisplayLogos showFront={false} />
        </article>
      </div>
    </section>
  );
};

export default InfoAbout;
