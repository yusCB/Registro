import React from "react";
import logo from '../assets/logo.png';
import sep from '../assets/sep.png';

const Header = () => {
    return (   
        <div className="bg-rose-900 w-full h-16">
            <header className="flex items-center justify-between h-full px-4">
                <img 
                    src={logo} 
                    className="h-10 sm:h-10 w-auto" 
                    alt="Logo" 
                />
                <img 
                    src={sep} 
                    className="h-12 sm:h-14 w-auto drop-shadow-[0px_0px_5px_white]" 
                    alt="SEP" 
                />
            </header>
        </div>
    );
}

export default Header;