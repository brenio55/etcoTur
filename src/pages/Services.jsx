import Button from '../components/Button';
import Service from '../components/Service';

function Services() {
    const services = [
        {
            title: "Transporte de Passageiros",
            description: "Translados Aeroporto, Faculdades, Transporte Escolar, Transporte de Funcionários, dentre outros.",
            imgSrc: "/img/services/transporteDePassageiros.png",
            buttonType: "whiteBackground",
            buttonValue: "Saiba Mais",
            buttonLink: "#contact"
        },
        {
            title: "Excursões",
            description: "Passeio mais longo ou viagem recreativa, muitas vezes em grupo e não raro orientado por um guia.",
            imgSrc: "/img/services/excursoes.png",
            buttonType: "whiteBackground",
            buttonValue: "Saiba Mais",
            buttonLink: "#contact"
        },
        {
            title: "Fretamentos",
            description: "transporte de frete, e serviços similares também são prestados conosco!",
            imgSrc: "/img/services/fretamentos.png",
            buttonType: "whiteBackground",
            buttonValue: "Saiba Mais",
            buttonLink: "#contact"
        },
        {
            title: "Outros Serviços",
            description: "Fretamentos diversos, turismo em geral, guia turístico, dentre outros serviços similares!",
            imgSrc: "/img/services/outrosServicos.png",
            buttonType: "whiteBackground",
            buttonValue: "Saiba Mais",
            buttonLink: "#contact"
        }
    ];

    return (
        <section className="services" id="services">
            <img 
                className="bordaSupServices" 
                src="/img/services/bordaSupServiços.png" 
                data-aos="fade-down"
                data-aos-duration="1000"
            />
            
            <h2 data-aos="fade-up" data-aos-delay="100">Serviços</h2>
            
            <div className="flex center servicesDiv">
                {services.map((service, index) => (
                    <div 
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={200 + (index * 100)}
                    >
                        <Service
                            title={service.title}
                            description={service.description}
                            imgSrc={service.imgSrc}
                            buttonType={service.buttonType}
                            buttonValue={service.buttonValue}
                            buttonLink={service.buttonLink}
                        />
                    </div>
                ))}
            </div>

            <img 
                className="montanhaServicesFinal" 
                src="\img\aboutUs\montanhasSobreNos.png" 
                alt="" 
                data-aos="fade-up"
                data-aos-delay="600"
            />
        </section>
    );
}

export default Services;