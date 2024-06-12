import { useState } from "react";
import { FaFacebook, FaInstagram, FaShareAlt, FaTiktok, FaTimes, FaUser, FaWhatsapp } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import IconButton from "../IconButton";
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
import SocialShareButton from "../SocialShareButton";

const Contenido = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const currentPageUrl = window.location.href;

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <div className="relative flex flex-col items-center justify-center mt-0 py-4 bg-odaRed">
            {/* Botón en la esquina superior izquierda */}
            <button
                className="fixed top-2 left-2 py-1 px-2  w-8 h-8 flex items-center justify-center rounded-full bg-[#b81b21] text-white transition-transform transform hover:scale-110 hover:shadow-lg"
                onClick={() => setModalOpen(true)}
            >
                <FaShareAlt />
            </button>
            <h2 className="text-odaWhite font-bold text-lg"> Oda Food</h2>
            <h2 className="text-odaGrey text-sm font-normal">
                Comida rica que no pasa de moda
            </h2>
            <div className="w-full flex flex-col justify-center pt-4 items-center">
                <div className="w-10/12">
                    <div className="flex flex-col gap-2 pt-0">
                        <IconButton icono={<FaWhatsapp className="text-[#7d7d7b] w-4 h-4" />} enlace="https://wa.me/+51956328763" texto="WhatsApp" />
                        <IconButton icono={<FaInstagram className="text-[#7d7d7b] w-4 h-4" />} enlace="https://www.instagram.com/tu-cuenta/" texto="Instagram" />
                        <IconButton icono={<FaTiktok className="text-[#7d7d7b] w-4 h-4" />} enlace="https://www.tiktok.com/@tu-cuenta" texto="TikTok" />
                        <IconButton icono={<FaFacebook className="text-[#7d7d7b] w-4 h-4" />} enlace="https://www.facebook.com/tu-pagina" texto="Facebook" />
                        <IconButton icono={<TbWorldWww className="text-[#7d7d7b] w-4 h-4" />} enlace="https://www.odaweb.com/catering" texto="Catering by ODA" />
                        <IconButton icono={<FaUser className="text-[#7d7d7b] w-4 h-4" />} enlace="mailto:correo@tuempresa.com" texto="Asesorías gastronómicas " />
                    </div>
                </div>
            </div>

            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
                    <div className="w-11/12 bg-white p-4 rounded" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="fixed top-2 left-2 py-1 px-2  w-8 h-8 flex items-center justify-center rounded-full bg-[#b81b21] text-white transition-transform transform hover:scale-110 hover:shadow-lg"
                            onClick={closeModal}
                        >
                            <FaTimes />
                        </button>
                        <div className="flex flex-col">
                            <SocialShareButton
                                url={currentPageUrl}
                                Icon={FacebookIcon}
                                text="Compartir en Facebook"
                                ShareButton={FacebookShareButton}
                            />
                            <SocialShareButton
                                url={currentPageUrl}
                                Icon={FacebookMessengerIcon}
                                text="Compartir en Messenger"
                                ShareButton={FacebookMessengerShareButton}
                            />
                            <SocialShareButton
                                url={currentPageUrl}
                                Icon={EmailIcon}
                                text="Compartir en E-mail"
                                ShareButton={EmailShareButton}
                            />
                            <SocialShareButton
                                url={currentPageUrl}
                                Icon={TwitterIcon}
                                text="Compartir en Twitter"
                                ShareButton={TwitterShareButton}
                            />
                            <SocialShareButton
                                url={currentPageUrl}
                                Icon={TelegramIcon}
                                text="Compartir en Telegram"
                                ShareButton={TelegramShareButton}
                            />
                            <SocialShareButton
                                url={currentPageUrl}
                                Icon={WhatsappIcon}
                                text="Compartir en Whatsapp"
                                ShareButton={WhatsappShareButton}
                            />
                            <SocialShareButton
                                url={currentPageUrl}
                                Icon={LinkedinIcon}
                                text="Compartir en Linkedin"
                                ShareButton={LinkedinShareButton}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contenido;
