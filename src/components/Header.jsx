import React, { useState } from "react";
import UlMenu from "./UlMenu";

function Header() {
    const [mostrarMenu, setMostrarMenu] = useState(false);

    const toggleMenu = () => {
        setMostrarMenu(!mostrarMenu);
    };

    const fecharMenu = () => {
        setMostrarMenu(false);
    };

    return (
        <>
            <header>
                <div className="logo">
                    <img src="img/logo.png" alt="logo" />
                </div>
                <svg
                    className="menuIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    onClick={toggleMenu}
                >
                    <path
                        fillRule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                </svg>
                <nav className={`menu ${mostrarMenu ? 'mostrar' : ''}`}>
                    <UlMenu fecharMenu={fecharMenu} />
                </nav>
            </header>
        </>
    );
}

export default Header;
