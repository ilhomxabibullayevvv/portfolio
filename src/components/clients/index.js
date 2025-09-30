import "./style.css"

export default function Clients() {
    return (
        <section className="clients">
            <div className="container clients__container">
                <h2 className="clients__title">Clients Feedback</h2>
                <h3 className="clients__sub-title">Customer testimonials</h3>
                <div className="clients__content">
                    <div className="clients__card">
                        <img className="clients__icon" src="/stars.svg" alt="" />
                        <p className="clients__descraption">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.&quot;</p>
                        <div className="clients__content2">
                            <img className="clients__img" src="/icon.png" alt="" />
                            <div className="clients__content3">
                                <h4 className="clients__name">Dianne Russell</h4>
                                <h5 className="clients__name2">Starbucks</h5>
                            </div>
                        </div>
                    </div>
                    <div className="clients__card">
                        <img className="clients__icon" src="/stars.svg" alt="" />
                        <p className="clients__descraption">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.&quot;</p>
                        <div className="clients__content2">
                            <img className="clients__img" src="/icon.png" alt="" />
                            <div className="clients__content3">
                                <h4 className="clients__name">Dianne Russell</h4>
                                <h5 className="clients__name2">Starbucks</h5>
                            </div>
                        </div>
                    </div>
                    <div className="clients__card">
                        <img className="clients__icon" src="/stars.svg" alt="" />
                        <p className="clients__descraption">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.&quot;</p>
                        <div className="clients__content2">
                            <img className="clients__img" src="/icon.png" alt="" />
                            <div className="clients__content3">
                                <h4 className="clients__name">Dianne Russell</h4>
                                <h5 className="clients__name2">Starbucks</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
