import Button from '../components/Button';

function Services () {
    return (
        <>
        <section className="services">
            <img className="bordaSupServices" src="../../public/img/services/bordaSupServiços.png" />
            <h2>Serviços</h2>
            <div className="flex center">
                <article>
                    <img src="" alt="icon1" />
                    <h3>Transporte de Passageiros</h3>

                    <h5>Translados Aeroporto, Faculdades, Transporte Escolar, Transporte de Funcionários, dentre outros.</h5>

                    <Button type="whiteBackground" 
                        value="Saiba Mais"
                    />
                </article>
            </div>
        </section>            
        </>
    )
}

export default Services