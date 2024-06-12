import "./index.css"
const Avatar = ({ imageUrl }) => {
    return (
        <div className="absolute w-72 h-24  overflow-hidden">
            <img src={imageUrl} alt="Avatar" className="w-full h-full object-cover" />
        </div>
    );
};

export default Avatar;
