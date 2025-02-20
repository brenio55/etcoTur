import Button from "../components/Button"

function Contact() {
    function send(event) {
        event.preventDefault(); // Impede o envio do formulário por padrão

        let nome = document.getElementById('nome').value;
        let mensagem = document.getElementById('mensagem').value;
        let respostaSoma = document.getElementById('respostaSoma').value;

        // Verifica se a resposta à soma está correta
        if (respostaSoma.trim() === "11") {
            mensagem = mensagem.replace(" ", "%20");

            var mensagemAEnviar = "https://wa.me/551938243222?text=Olá!%20Vim do seu site!%20Meu%20nome%20é%20" + nome + ".%20Vim%20do%20seu%20site.%0AMensagem%20personalizada:%20" + mensagem;

            alert('Redirecionando você para o Whatsapp com sua mensagem personalizada... Clique em OK para continuar...');

            window.open(mensagemAEnviar);
        } else {
            alert('A resposta à soma está incorreta. Por favor, tente novamente.');
        }
    }

    return (
        <>
            <img 
                src="/img/services/montanhasServiços.png" 
                alt="" 
                className="montanhaServices"
                data-aos="fade-down"
                data-aos-duration="1000"
            />
            <section className="contact" id="contact">
                <h2 data-aos="fade-up" data-aos-delay="100">Contato</h2>

                <div className="flex spaceAround central">
                    <div className="contactL" data-aos="fade-right" data-aos-delay="200">
                        <h3>Entre em contato conosco por meio do formulário de contato ao lado, ou por meio de alguma das nossas redes sociais!</h3>
                        <div className="flex redesSociais">
                            <div className="redeSocialContact">
                                <a href="https://wa.me/551938243222" target="_blank">
                                    <img src="/img/contact/whatsapp.png" alt="whatsapp icon" />
                                </a>
                            </div>
                            <div className="redeSocialContact">
                                <a href="https://www.instagram.com/etcoturoficial/" target="_blank">
                                    <img src="/img/contact/instagram.png" alt="instagram icon" />
                                </a>
                            </div>   
                            <div className="redeSocialContact">
                                <a href="https://www.linkedin.com/company/etco-tur/?originalSubdomain=br" target="_blank">
                                    <img src="/img/contact/linkedin.png" alt="linkedin icon" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contactR" data-aos="fade-left" data-aos-delay="300">
                        <form onSubmit={send}>
                            <input type="text" name="nome" id="nome" placeholder="Nome" />

                            <textarea type="text" name="mensagem" id="mensagem" placeholder="Mensagem" cols={40} rows={6} />

                            <div className="flex">
                                <input type="text" className="respostaSoma" name="respostaSoma" id="respostaSoma" placeholder="4 + 7 = " />
                                <input type="submit" value="Enviar" className="buttonWhiteBackground enviarContactButton" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;
