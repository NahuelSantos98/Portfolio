import DisplayLogos from "./DisplayLogos";

const InfoAbout = () => {
  return (
    <section className="flex flex-col gap-8 xl:flex-row justify-center items-center ">
      <div className="text-gray-200 text-justify md:w-[70vw] xl:w-[30%] bg-gray-800 p-4 rounded-lg"> {/* Cambiado a color de texto de la paleta */}
        <p>¡Hola! Soy Nahuel Martin Santos, un apasionado del desarrollo web en busca de oportunidades para iniciar mi carrera profesional en el ámbito del desarrollo Back-End y/o Front-End. Aunque actualmente no tengo experiencia laboral, estoy ansioso por aplicar mis conocimientos y habilidades en un entorno profesional.</p>
        <p>Además de mis habilidades técnicas, también estoy familiarizado con metodologías de trabajo ágiles, lo que me permite abordar los proyectos de manera eficiente y colaborativa. Soy un firme creyente en la importancia de la comunicación efectiva y la colaboración en equipo.</p>
      </div>
      <div className='flex flex-col justify-center items-center gap-8 lg:flex-row'>
        <DisplayLogos showFront={true} />
        <DisplayLogos showFront={false} />
      </div>
    </section>
  );
};

export default InfoAbout;
