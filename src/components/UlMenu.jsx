function UlMenu({fecharMenu}){
    return (
        <>
            <ul className="UlMenu">
                <a href="#banner" onClick={fecharMenu}><li>INÍCIO</li></a>
                <a href="#services" onClick={fecharMenu}><li>SERVIÇOS</li></a>
                <a href="#contact" onClick={fecharMenu}><li>CONTATO</li></a>
                <a href="#aboutUs" onClick={fecharMenu}><li>SOBRE NÓS</li></a>
                <a href="#contact" onClick={fecharMenu}><li>TRABALHE CONOSCO</li></a>
            </ul>
        </>
    )
}

export default UlMenu