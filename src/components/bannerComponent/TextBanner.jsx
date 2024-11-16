const TextBanner = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center">
                <div className="flex items-center">
                    <p className="text-white text-left">Hey, que tal?,</p>
                </div>
                <p className="text-white text-left font-bold text-4xl lg:text-5xl">SOY NAHUEL</p>
                <p className="text-white text-left font-bold text-4xl lg:text-5xl">UN WEB DEVELOPER</p>
                <p className="text-white text-left max-w-xs lg:max-w-lg">
                    Disfruto creando con código, combinando mis habilidades de desarrollo web con diseño, aprovechando mi creatividad y atención al detalle.
                </p>
                <a href="/CV-Nahuel Martin Santos.pdf" download="CV Nahuel Martin Santos" className="w-[10rem] text-white border border-white rounded-lg p-2 my-4 hover:bg-gray-700 text-white hover:scale-105 active:scale-none mb-2 text-center transition-all duration-300 ease-in-out">
                    Descargar CV
                </a>
            </div>
        </div>
    );
};

export default TextBanner;
