import { FaFacebook, FaInstagram, FaTiktok, FaUser, FaWhatsapp } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import IconButton from "../IconButton";
import { useState } from "react";
import IconoHover from "../Icon";
import ImageModal from "../ImgModal";



const Contenido = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setModalOpen(true);
    };


    return (

        <div className="flex flex-col items-center justify-center mt-4 py-4 bg-odaRed" >
            <h2 className="text-odaWhite font-bold text-lg"> Oda Food</h2>
            <h2 className="text-odaGrey text-sm font-normal">
                Comida rica que no pasa de moda
            </h2>
            <div className="w-full flex flex-col justify-center pt-4 items-center">
                <div className="w-10/12">
                    <div className="flex flex-col gap-2 pt-0">
                        <IconButton icono={<FaWhatsapp className="text-[#7d7d7b] w-4 h-4" />} enlace="https://wa.me/numero-de-telefono" texto="WhatsApp" />
                        <IconButton icono={<FaInstagram className="text-[#7d7d7b] w-4 h-4" />} enlace="https://www.instagram.com/tu-cuenta/" texto="Instagram" />
                        <IconButton icono={<FaTiktok className="text-[#7d7d7b] w-4 h-4" />} enlace="https://www.tiktok.com/@tu-cuenta" texto="TikTok" />
                        <IconButton icono={<FaFacebook className="text-[#7d7d7b] w-4 h-4" />} enlace="https://www.facebook.com/tu-pagina" texto="Facebook" />
                        <IconButton icono={<TbWorldWww className="text-[#7d7d7b] w-4 h-4" />} enlace="https://www.odaweb.com/catering" texto="Catering by ODA" />
                        <IconButton icono={<FaUser className="text-[#7d7d7b] w-4 h-4" />} enlace="mailto:correo@tuempresa.com" texto="Asesorías gastronómicas " />
                        <IconButton icono={<FaTiktok className="text-[#7d7d7b] w-4 h-4" />} enlace="https://www.tiktok.com/@tu-cuenta" texto="TikTok" />
                        <IconButton icono={<FaFacebook className="text-[#7d7d7b] w-4 h-4" />} enlace="https://www.facebook.com/tu-pagina" texto="Facebook" />
                        <IconButton icono={<TbWorldWww className="text-[#7d7d7b] w-4 h-4" />} enlace="https://www.odaweb.com/catering" texto="Catering by ODA" />
                        <IconButton icono={<FaUser className="text-[#7d7d7b] w-4 h-4" />} enlace="mailto:correo@tuempresa.com" texto="Asesorías gastronómicas " />
                    </div>

                    {/* <div className="flex justify-evenly">
                        <IconoHover icono={<FaWhatsapp />} enlace="https://wa.me/numero-de-telefono" texto="WhatsApp" />
                        <IconoHover icono={<FaInstagram />} enlace="https://www.instagram.com/tu-cuenta/" texto="Instagram" />
                        <IconoHover icono={<FaTiktok />} enlace="https://www.tiktok.com/@tu-cuenta" texto="TikTok" />
                        <IconoHover icono={<FaFacebook />} enlace="https://www.facebook.com/tu-pagina" texto="Facebook" />
                        <IconoHover icono={<TbWorldWww />} enlace="https://www.odaweb.com/catering" texto="Catering by ODA(Web)" />
                        <IconoHover icono={<FaUser />} enlace="mailto:correo@tuempresa.com" texto="Asesorías gastronómicas con el chef Joseph Huiza(Contact)" />
                    </div>
                    <div className="flex justify-center py-2">
                        <p className="text-slate-50 leading-4 text-xs font-light text-center">
                            Catering by ODA transforma tus eventos en experiencias culinarias únicas. Ofrecemos menús personalizados y un servicio impecable para cualquier ocasión, garantizando calidad y creatividad en cada plato. Tu satisfacción es nuestra prioridad.
                        </p>
                    </div>


                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-odaWhite font-bold text-lg"> Revisa nuestro proyecto</h2>
                    </div>
                    <div className=" py-4 grid grid-cols-2 gap-3 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg">
                        <div className=" rounded-lg shadow-lg">
                            <img
                                src={'https://media.admagazine.com/photos/646be39a7c824a535c542d50/16:9/w_2560%2Cc_limit/KitchenAid-1.jpg'}
                                className="object-cover w-full h-full rounded"//250*150
                                onClick={() => handleImageClick('https://media.admagazine.com/photos/646be39a7c824a535c542d50/16:9/w_2560%2Cc_limit/KitchenAid-1.jpg')}
                                alt="Imagen"
                            />
                        </div>
                        <div className=" rounded-lg shadow-lg">
                            <img
                                src={'https://media.admagazine.com/photos/646be39a7c824a535c542d50/16:9/w_2560%2Cc_limit/KitchenAid-1.jpg'}
                                className="object-cover w-full h-full rounded"//250*150
                                onClick={() => handleImageClick('https://media.admagazine.com/photos/646be39a7c824a535c542d50/16:9/w_2560%2Cc_limit/KitchenAid-1.jpg')}
                                alt="Imagen"
                            />
                        </div>
                        <div className=" rounded-lg shadow-lg">
                            <img
                                src={'https://media.admagazine.com/photos/618a61d996bc0f80f8b42dab/master/w_1600%2Cc_limit/83281.jpg'}
                                className="object-cover w-full h-full rounded"//250*150
                                onClick={() => handleImageClick('https://media.admagazine.com/photos/618a61d996bc0f80f8b42dab/master/w_1600%2Cc_limit/83281.jpg')}
                                alt="Imagen"
                            />
                        </div>
                        <div className=" rounded-lg shadow-lg">
                            <img
                                src={'https://media.admagazine.com/photos/646be39a7c824a535c542d50/16:9/w_2560%2Cc_limit/KitchenAid-1.jpg'}
                                className="object-cover w-full h-full rounded"//250*150
                                onClick={() => handleImageClick('https://media.admagazine.com/photos/646be39a7c824a535c542d50/16:9/w_2560%2Cc_limit/KitchenAid-1.jpg')}
                                alt="Imagen"
                            />
                        </div>
                        <ImageModal isOpen={modalOpen} imageUrl={selectedImage} onClose={() => setModalOpen(false)} /> 
                </div>
*/}
                </div>
            </div>
        </div >
    );
};
export default Contenido;