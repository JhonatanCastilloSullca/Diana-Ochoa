import Avatar from '../Avatar';
import Contenido from '../Contenido';
import './index.css'
import imgBackground from '../../assets/images/logo-oda-blanco.png'



const Background = ({ imageUrl }) => {
    return (
        <div className="background-container">
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="avatar-container">
                <Avatar imageUrl={imgBackground} />
            </div>
            <div className="container">
                <Contenido />
            </div>
        </div>
    );
};
export default Background;