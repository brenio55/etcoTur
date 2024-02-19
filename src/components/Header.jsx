import UlMenu from "./UlMenu"

function Header(){
    return (
        <>
            <header>
                <div className="logo">
                    <img src="img/logo.png" alt="logo" />
                </div>
                <div className="menu">
                    <UlMenu></UlMenu>
                </div>
            </header>
        </>
    )
}

export default Header