const SocialShareButton = ({ url, Icon, text, ShareButton }) => {
    return (
        <div className="flex flex-col items-center justify-center py-2 bg-white shadow-2xl rounded-lg my-2">
            <ShareButton url={url} className="flex items-center space-x-2 bg-blue-600 text-odaRed py-2 px-4 rounded-full hover:bg-blue-700 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Icon round={true} />
                </div>
                <div className="ml-4 flex justify-center flex-grow">
                    <p className="text-base font-semibold text-gray-700 text-odaRed-content">{text}</p>
                </div>
            </ShareButton>
        </div>
    );
};
export default SocialShareButton