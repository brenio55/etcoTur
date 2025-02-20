import UlMenu from "./UlMenu"

function Footer() {
    return (
        <>
            <img className="footerTopWave" src="/img/topWaveFooter.png" alt="" />

            <footer data-aos="fade-up" data-aos-offset="200">
                <a href="#banner"><img src="img/logo.png" alt="logo" className="logo"/></a>
                <div className="flex footerItems">
                    <div className="flex menuFooter">
                        <h5>Menu</h5>
                        <UlMenu></UlMenu>
                    </div>

                    <div className="flex contactFooter">
                        <h5>Contato</h5>
                        <ul>
                            <a href="mailto:etcoaguas@hotmail.com"><li>etcoaguas@hotmail.com</li></a>
                            <a href="tel:(19)3824-3222"><li>(19) 3824-3222</li></a>
                        </ul>
                    </div>

                    <div className="flex socialFooter">
                        <h5>Redes Sociais</h5>
                        <div className="flex redesSociais footer">
                            <div className="redeSocialContact footer">
                                <a href="https://wa.me/551938243222" target="_blank"><img src="/img/contact/whatsapp.png" alt="whatsapp icon" /></a>
                            </div>
                            <div className="redeSocialContact footer">
                                <a href="https://www.linkedin.com/company/etco-tur/?originalSubdomain=br" target="_blank"><img src="/img/contact/linkedin.png" alt="linkedin icon" /></a>
                            </div>
                            <div className="redeSocialContact footer">
                                <a href="https://www.instagram.com/etcoturoficial/" target="_blank"><img src="/img/contact/instagram.png" alt="instagram icon" /></a>
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
                    }}><a href="https://divsec.cloud" target="_blank">Desenvolvido por &lt;DiVSeC&gt; </a></p>
            </footer>
        </>
    )
}

export default Footer