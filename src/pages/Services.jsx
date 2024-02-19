import Button from '../components/Button';
import Service from '../components/Service';

function Services () {
    return (
        <>
        <section className="services">
            <img className="bordaSupServices" src="/img/services/bordaSupServiços.png" />
            <h2>Serviços</h2>
            <div className="flex center servicesDiv">
                <Service
                    title="Transporte de Passageiros"
                    description="Translados Aeroporto, Faculdades, Transporte Escolar, Transporte de Funcionários, dentre outros."
                    imgSrc="/img/services/transporteDePassageiros.png"
                    buttonType="whiteBackground"
                    buttonValue="Saiba Mais"                
                ></Service>
                <Service
                    title="Excursões"
                    description="Passeio mais longo ou viagem
                    recreativa, muitas vezes em grupo e
                    não raro orientado por um guia."
                    imgSrc="/img/services/excursoes.png"
                    buttonType="whiteBackground"
                    buttonValue="Saiba Mais"                
                ></Service>
                <Service
                    title="Fretamentos"
                    description="transporte de frete, e serviços
                    similares também são prestados
                    conosco!"
                    imgSrc="/img/services/fretamentos.png"
                    buttonType="whiteBackground"
                    buttonValue="Saiba Mais"                
                ></Service>
                <Service
                    title="Outros Serviços"
                    description="Fretamentos diversos, turismo em
                    geral, guia turístico, dentre outros
                    serviços similares!"
                    imgSrc="/img/services/outrosServicos.png"
                    buttonType="whiteBackground"
                    buttonValue="Saiba Mais"                
                ></Service>
            </div>

            <img className="montanhaServicesFinal" src="\img\aboutUs\montanhasSobreNos.png" alt="" />
        </section>            
        </>
    )
}

export default Services