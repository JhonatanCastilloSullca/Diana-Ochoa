const IconoHover = ({ icono, enlace, texto }) => {
    return (
        <a href={enlace} target="_blank" rel="noopener noreferrer" className="relative inline-block">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#b81b21] text-white transition-transform transform hover:scale-110 hover:shadow-lg">
                {icono}
            </div>
        </a>
    );
};

export default IconoHover