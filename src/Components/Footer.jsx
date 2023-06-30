import React from 'react';
import '../Components/utils/styles/Footer.css'


const Footer = () => {
  return (
    <footer className='footerContainer'>

      <div>
        <img className="logo" src="./images/DH.png" alt="DH-logo" />
      </div>
      <div>
        <img className="socials" src="./images/ico-facebook.png" alt="fb" />
        <img className="socials" src="./images/ico-instagram.png" alt="ig" />
        <img className="socials" src="./images/ico-whatsapp.png" alt="tt" />
        <img className="socials" src="./images/ico-tiktok.png" alt="tt" />
      </div>
    </footer>
  );
};

export default Footer;





