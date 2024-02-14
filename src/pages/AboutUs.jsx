function AboutUs () {
    return (
        <>
            <section className="aboutUs">
            <svg width="1439" height="61" viewBox="0 0 1439 61" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1440 -0.000125885L1413.3 -0.000123551C1386.7 -0.000121225 1333.3 -0.000116557 1280 -0.000111897C1226.7 -0.000107238 1173.3 -0.000102569 1120 -9.79097e-05C1066.7 -9.32501e-05 1013.3 -8.85817e-05 960.002 -8.39221e-05C906.702 -7.92624e-05 853.302 -7.45941e-05 800.002 -6.99344e-05C746.702 -6.52748e-05 693.302 -6.06064e-05 640.002 -5.59468e-05C586.702 -5.12872e-05 533.302 -4.66188e-05 480.002 -4.19591e-05C426.702 -3.72995e-05 373.302 -3.26311e-05 320.002 -2.79715e-05C266.702 -2.33119e-05 213.302 -1.86435e-05 160.002 -1.39839e-05C106.702 -9.32422e-06 53.3019 -4.65584e-06 26.7019 -2.3304e-06L0.00194779 3.7885e-09L0.00195204 48.5547L26.7019 49.9953C53.3019 51.3826 106.702 54.2638 160.002 54.9575C213.302 55.6511 266.702 54.2638 320.002 54.9575C373.302 55.6511 426.702 58.5323 480.002 59.9196C533.302 61.3602 586.702 61.3602 640.002 59.9196C693.302 58.5323 746.702 55.651 800.002 53.5168C853.302 51.3825 906.702 49.9952 960.002 49.2482C1013.3 48.5546 1066.7 48.5546 1120 50.6888C1173.3 52.8231 1226.7 57.0916 1280 58.5323C1333.3 59.9195 1386.7 58.5323 1413.3 57.7853L1440 57.0916L1440 -0.000125885Z" fill="#0991CC"/> </svg>

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
            </section>
        </>
    )
}

export default AboutUs 