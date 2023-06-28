import React from 'react';
import '../Components/Footer.css'


const Footer = () => {
  return (
    <div className='footerContainer'>
    <div className='footerLogo'>
<p>Powered by <img src="./images/DH.png" alt="DH-logo" width='150px'/> </p>
</div>
<div className='socialLinks'>
<img src="./images/ico-facebook.png" alt="fb"/>
<img src="./images/ico-instagram.png" alt="ig"/>
<img src="./images/ico-whatsapp.png" alt="tt"/>
<img src="./images/ico-tiktok.png" alt="tt"/>
</div>
    </div>
  );
};

export default Footer;





