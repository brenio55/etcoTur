import React from 'react';
// import video from '/video/videoApresentacao.mp4';

function AboutUs () {
    return (
        <>
            <section className="aboutUs" id="aboutUs">

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

                        <p>A história começa em 2003, no Dia de Nossa Senhora das Graças, quando Sr. Paulo e Enio Pirani, pai e filho, decidem adquirir uma pequena empresa, com apenas dois ônibus, na esperança de explorar o mundo das excursões.
                        </p>

                        <br></br>

                        <p>Após conseguir estabilizar e perceber que aqueles dois ônibus poderiam se tornar algo maior, abandonaram tudo e focaram suas forças para fazer a Etco Tur prosperar.
                        Foi a partir daí que novos carros começaram a serem comprados e a empresa ano a ano foi se solidificando no mercado e se tornando referência na região. Hoje são mais de 12 cidades com garagem e mais de 150 veículos próprios.</p>
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
                        <h4>150+</h4>
                        <h4>veículos próprios</h4>
                        <p>Uma larga gama de veículos em garagem para sua maior necessidade</p>
                    </div>

                    <div className="vantagem">
                        <h4>2003</h4>
                        <h4>Fundada desde</h4>
                        <p>Experientes na área, temos a melhor solução para te dar com base em nossa própria carreira</p>
                    </div>
                </div>

                <a href="#contact"><button className="GreenBackground">Fale Conosco</button></a>
                <br></br>

                <div className="videoContainer">
                    <video src='/video/videoApresentacao.mp4' autoPlay muted loop className="videoEtcoTur"></video>
                </div>
                    

            </section>
        </>
    )
}

export default AboutUs 