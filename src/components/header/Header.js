import WOW from 'wowjs';
import React, { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);
    return ( 
        <header className="w-full h-[75vh] pt-9 px-6 wow animate__animated animate__fadeIn" data-wow-duration="1s">
            <div className="bg-hero-image bg-cover bg-bottom h-[75vh]">
                
            </div>
        </header>
     );
}
export default Header;