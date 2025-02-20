import React from 'react';
// import video from '/video/videoApresentacao.mp4';

function AboutUs () {
    return (
        <>
            <section className="aboutUs" id="aboutUs">
                <img 
                    className="topWaveAboutUs" 
                    src="/img/aboutUs/topWaveAboutUs.png" 
                    alt="" 
                    data-aos="fade-down"
                    data-aos-duration="1000"
                />

                <div data-aos="fade-right" data-aos-delay="100">
                    <h2>Sobre Nós</h2>
                </div>

                <div className="flex spaceAround central">
                    <div className="aboutUsL" data-aos="fade-right" data-aos-delay="200">
                        <img src="/img/aboutUs/vansBehind.png" alt="" />
                    </div>
                    <div className="aboutUsR" data-aos="fade-left" data-aos-delay="300">
                        <h3>a Etco Tur</h3>                            
                        <br></br>

                        <p>A história começa em 2003, no Dia de Nossa Senhora das Graças, quando Sr. Paulo e Enio Pirani, pai e filho, decidem adquirir uma pequena empresa, com apenas dois ônibus, na esperança de explorar o mundo das excursões.
                        </p>

                        <br></br>

                        <p>Após conseguir estabilizar e perceber que aqueles dois ônibus poderiam se tornar algo maior, abandonaram tudo e focaram suas forças para fazer a Etco Tur prosperar.
                        Foi a partir daí que novos carros começaram a serem comprados e a empresa ano a ano foi se solidificando no mercado e se tornando referência na região. Hoje são mais de 12 cidades com garagem e mais de 150 veículos próprios.</p>
                    </div>
                </div>

                <h3 
                    className="porqueNosEscolher"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Por que nos escolher?
                </h3>
                <div className="flex vantagens">
                    <div 
                        className="vantagem"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        <h4>12+</h4>
                        <h4>cidades atendidas</h4>
                        <p>Temos um dos maiores alcances de atendimento da área</p>
                    </div>

                    <div 
                        className="vantagem"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                    >
                        <h4>150+</h4>
                        <h4>veículos próprios</h4>
                        <p>Uma larga gama de veículos em garagem para sua maior necessidade</p>
                    </div>

                    <div 
                        className="vantagem"
                        data-aos="zoom-in"
                        data-aos-delay="600"
                    >
                        <h4>2003</h4>
                        <h4>Fundada desde</h4>
                        <p>Experientes na área, temos a melhor solução para te dar com base em nossa própria carreira</p>
                    </div>
                </div>

                <a 
                    href="#contact"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <button className="GreenBackground">Fale Conosco</button>
                </a>

                <div 
                    className="videoContainer"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <video src='/video/videoApresentacao.mp4' autoPlay muted loop className="videoEtcoTur"></video>
                </div>
            </section>
        </>
    )
}

export default AboutUs 