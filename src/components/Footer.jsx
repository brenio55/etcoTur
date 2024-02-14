function Footer() {
    return (
        <>
            <footer>
                <img src="img/logo.png" alt="logo" className="logo"/>
                <div className="flex footerItems">
                    <div className="flex menuFooter">
                        <h5>Menu</h5>
                        <ul>
                            <li>Início</li>
                            <li>Serviços</li>
                            <li>Contato</li>
                            <li>Sobre</li>
                            <li>Trabalhe Conosco</li>
                        </ul>
                    </div>

                    <div className="flex contactFooter">
                        <h5>Contato</h5>
                        <ul>
                            <li>etcoaguas@hotmail.com</li>
                            <li>(19) 3824-3222</li>
                        </ul>
                    </div>

                    <div className="flex socialFooter">
                        <h5>Redes Sociais</h5>
                        <div className="flex redesSociais footer">
                            <div className="redeSocialContact footer">
                                <img src="/img/contact/whatsapp.png" alt="whatsapp icon" />
                            </div>
                            <div className="redeSocialContact">
                                <img src="/img/contact/linkedin.png" alt="linkedin icon" />
                            </div>
                            <div className="redeSocialContact">
                                <img src="/img/contact/instagram.png" alt="instagram icon" />
                            </div>                            
                        </div>
                    </div>
                </div>

                <p style={{
                    textAlign: "center",
                    position: "absolute",
                    bottom: "0px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    marginBottom: "5px",
                    fontSize: "13px"
                    }}><a href="https://www.instagram.com/divsec.dev/">Desenvolvido por &lt;DiVSeC&gt; </a></p>
            </footer>
        </>
    )
}

export default Footer