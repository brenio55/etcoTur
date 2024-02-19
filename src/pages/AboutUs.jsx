function AboutUs () {
    return (
        <>
            <section className="aboutUs">

            <img className="topWaveAboutUs" src="/img/aboutUs/topWaveAboutUs.png" alt="" />


                <h2>Sobre Nós</h2>
                <div className="flex spaceAround central">
                    <div className="aboutUsL">
                        <img src="/img/aboutUs/vansBehind.png" alt="" />
                    </div>
                    <div className="aboutUsR">
                        <h3>a Etco Tur</h3>                            
                        <p> Fundada em 1997 na cidade de Ouro Fino por Sr. Pedro, iniciou sua jornada com apenas dois ônibus, concentrando-se em serviços de fretamentos turísticos. </p>

                        <br></br>

                        <p>A história toma um rumo em 2003, no Dia de Nossa Senhora das Graças, quando Sr. Paulo e Enio Pirani, pai e filho, decidem adquirir metade dessa pequena empresa com a esperança de tornarem-se motoristas e explorarem o mundo das excursões.</p>
                    </div>
                </div>

                <h3 className="porqueNosEscolher">Por que nos escolher?</h3>
                <div className="flex vantagens">
                    <div className="vantagem">
                        <h4>12+</h4>
                        <h4>cidades atendidas</h4>
                        <p>Temos um dos maiores alcances de atendimento da área</p>
                    </div>

                    <div className="vantagem">
                        <h4>130+</h4>
                        <h4>veículos próprios</h4>
                        <p>Uma larga gama de veículos em garagem para sua maior necessidade</p>
                    </div>

                    <div className="vantagem">
                        <h4>1997</h4>
                        <h4>Fundada desde</h4>
                        <p>Experientes na área, temos a melhor solução para te dar com base em nossa própria carreira</p>
                    </div>
                </div>

                <button className="GreenBackground">Fale Conosco</button>
                <br></br>

                
                
            </section>
        </>
    )
}

export default AboutUs 