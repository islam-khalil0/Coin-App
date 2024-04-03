import { useState, useEffect } from 'react';
import Styles from './index.module.css';
import svgImg from '../../assets/react.svg';
import svgImg2 from '../../../public/vite.svg';
import QRcode from '../../assets/QRcode.png';

const InfoComponent = () => {
    const [backgroundColor, setBackgroundColor] = useState('#000');
    const [imageIndex, setImageIndex] = useState(0);
    const [showQRcode, setShowQRcode] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false);
    const images = [svgImg, svgImg2];

    useEffect(() => {
        const backgroundIntervalId = setInterval(changeBackgroundColor, 1000);
        const imageIntervalId = setInterval(changeImage, 1000);

        return () => {
            clearInterval(backgroundIntervalId);
            clearInterval(imageIntervalId);
        };
    }, []);

    useEffect(() => {
        const animationTimeout = setTimeout(() => {
            setShowAnimation(false);
        }, 500);

        return () => clearTimeout(animationTimeout);
    }, [showAnimation]);

    const changeBackgroundColor = () => {
        const randomColor = generateRandomColor();
        setBackgroundColor(randomColor);
    };

    const generateRandomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    const changeImage = () => {
        setImageIndex(prevIndex => (prevIndex + 1) % images.length);
    };

    const handleClick = () => {
        setShowQRcode(!showQRcode);
        setShowAnimation(true);
    };

    const renderQRcodeContent = () => {
        return (
            <div className={`${Styles.mutualContent} ${showAnimation ? Styles.grow : ''}`}>
                <span className={Styles.QRcode}>
                    <img src={QRcode} alt="QRcode" />
                </span>
                <button onClick={handleClick} className={Styles.scanBtn}>Scan the QR code</button>
            </div>
        );
    };

    const renderColorListContent = () => {
        return (
            <div className={`${Styles.mutualContent} ${showAnimation ? Styles.grow : ''}`}>
                <span style={{ backgroundColor }} className={Styles.colorsList}>
                    <img src={images[imageIndex]} alt="icon" />
                </span>
                <button onClick={handleClick} className={Styles.getAppBtn}>Get the app</button>
            </div>
        );
    };

    return (
        <div className={Styles.Container}>
            <h1>Coin App</h1>
            <p>Description of the app. Description of the app. Description of the app. Description of the app. Description of the app.</p>

            {showQRcode ? renderQRcodeContent() : renderColorListContent()}

            <ul>
                <li>Feature</li>
                <li>Feature</li>
                <li>Feature</li>
                <li>Feature</li>
                <li>Feature</li>
            </ul>
        </div>
    );
};

export default InfoComponent;
