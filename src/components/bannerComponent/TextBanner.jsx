const TextBanner = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center">
                <p className="text-white text-left">Hey There,</p>
                <p className="text-white text-left font-bold text-4xl lg:text-5xl">I AM NAHUEL</p>
                <p className="text-white text-left font-bold text-4xl lg:text-5xl">A WEB DEVELOPER</p>
                <p className="text-white text-left max-w-xs lg:max-w-lg">
                    I enjoy combining my web development skills with design, leveraging my artistic eye and attention to detail.
                </p>
                <button className="w-[10rem] text-white border border-white rounded-lg p-2 my-4 hover:bg-white hover:text-black mb-2">
                    Descargar CV
                </button>
            </div>
        </div>
    );
};

export default TextBanner;
