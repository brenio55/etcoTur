import Button from "../components/Button"

function Contact () {
    return (
        <>
            <img src="/img/services/montanhasServiços.png" alt="" className="montanhaServices"/>
            <section className="contact">
                <h2>Contato</h2>
                <div className="flex spaceAround central">
                    <div className="contactL">
                        <h3>Entre em contato conosco por meio do formulário de contato ao lado, ou por meio de alguma das nossas redes sociais!</h3>    
                        <div className="flex redesSociais">
                            <div className="redeSocialContact">
                                <img src="/img/contact/whatsapp.png" alt="whatsapp icon" />
                            </div>
                            <div className="redeSocialContact">
                                <img src="/img/contact/instagram.png" alt="instagram icon" />
                            </div>
                            <div className="redeSocialContact">
                                <img src="/img/contact/linkedin.png" alt="linkedin icon" />
                            </div>
                        </div>
                    </div>
                    <div className="contactR">
                        <form action="">
                            <input type="text" name="nome" id="" placeholder="Nome"/>
                            
                            <textarea type="text" name="mensagem" id="" placeholder="Mensagem" cols={40} rows={6}/>
                        
                            <div className="flex">
                                <input type="text" className="respostaSoma" name="respostaSoma" id="" placeholder="4 + 7 = "/>
                                <input type="submit" value="Enviar" className="buttonWhiteBackground enviarContactButton" />    
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact