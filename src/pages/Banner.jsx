

function Banner(){

    return (
        <>
            <section className="banner" id="banner">
                
                    <div className="flex spaceAround flexBannerEtco">
                        <div className="sideLBanner">
                            <img className="busCut" src="/img/banner/onibusCut.png" alt="" />
                        </div>
                        <div className="sideRBanner">
                            <div className="flex column textosBanner">
                                <h1>Etco Tur</h1>
                                <h2>27 Anos Conectando Sonhos, Destinos e Viagens Incríveis</h2>

                                <a href="#aboutUs"><button className="halfDarkBlueBackground rounded">Descobrir</button></a>
                            </div>
                        </div>
                    </div>
                
            </section>
        </>
    )
}

export default Banner