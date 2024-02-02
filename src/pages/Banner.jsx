

function Banner(){

    return (
        <>
            <section className="banner">
                <div className="flex spaceAround flexBannerEtco">
                    <div className="sideLBanner">
                        <img className="busCut" src="/img/banner/onibusCut.png" alt="" />
                    </div>
                    <div className="sideRBanner">
                        <div className="flex column">
                            <h1>Etco Tur</h1>
                            <h2>27 Anos Conectando Sonhos, Destinhos e Viagens Incríveis</h2>

                            <button>Descobrir</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner