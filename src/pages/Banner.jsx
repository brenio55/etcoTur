function Banner() {
    return (
        <section className="banner" id="banner">
            <div className="flex spaceAround flexBannerEtco">
                <div 
                    className="sideLBanner"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <img className="busCut" src="/img/banner/onibusCut.png" alt="" />
                </div>
                <div 
                    className="sideRBanner"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    <div className="flex column textosBanner">
                        <h1>Etco Tur</h1>
                        <h2>27 Anos Conectando Sonhos, Destinos e Viagens Incríveis</h2>
                        <a href="#aboutUs">
                            <button 
                                className="halfDarkBlueBackground rounded"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                Descobrir
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;