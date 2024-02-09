import Button from "../components/Button"

function Contact () {
    return (
        <>
            <section className="contact">
                <h2>Contato</h2>
                <div className="flex spaceAround">
                    <div className="contactL">
                        <h3>Entre em contato conosco por meio do formulário de contato ao lado, ou por meio de alguma das nossas redes sociais!</h3>    
                        <div className="flex">
                            <div className="redeSocialContact">
                                <img src="" alt="" />
                            </div>
                            <div className="redeSocialContact">
                                <img src="" alt="" />
                            </div>
                            <div className="redeSocialContact">
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="contactL">
                        <form action="">
                            <input type="text" name="nome" id="" placeholder="Nome"/>
                            <input type="text" name="mensagem" id="" placeholder="Mensagem"/>
                            <input type="text" name="respostaSoma" id="" placeholder="4 + 7 = "/>

                            <input type="submit" value="Enviar" className="buttonWhiteBackground" />
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact