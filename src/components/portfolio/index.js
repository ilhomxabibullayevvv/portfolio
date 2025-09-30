import Link from "next/link"
import "./style.css"
export default function Portfolio() {
    return (
        <section className="portfolio">
            <div className="container portfolio__container">
                <div className="portfolio__content">
                    <div className="portfolio__content2">
                        <h2 className="portfolio__title">Recent Projects</h2>
                        <h3 className="portfolio__sub-title">My Portfolio</h3>
                    </div>
                    <button className="portfolio__btn"><img className="portfolio__img" src="/icons.svg" alt="" /> Social button</button>
                </div>
                <div className="portfolio__content3">
                    <div className="portfolio__card">
                        <img className="portfolio__img2" src="/portfolio.png" alt="" />
                        <div className="portfolio__content4">
                            <h4 className="portfolio__name">Ahuse</h4>
                            <p className="portfolio__descraption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                            <Link className="portfolio__link" href="">View In Dribbble <img className="portfolio__img3" src="/vector.svg" alt="" /></Link>
                            <span className="portfolio__span"></span>
                        </div>
                    </div>
                    <div className="portfolio__card">
                        <img className="portfolio__img2" src="/portfolio.png" alt="" />
                        <div className="portfolio__content4">
                            <h4 className="portfolio__name">Ahuse</h4>
                            <p className="portfolio__descraption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                            <Link className="portfolio__link" href="">View In Dribbble <img className="portfolio__img3" src="/vector.svg" alt="" /></Link>
                            <span className="portfolio__span"></span>
                        </div>
                    </div>
                    <div className="portfolio__card">
                        <img className="portfolio__img2" src="/portfolio.png" alt="" />
                        <div className="portfolio__content4">
                            <h4 className="portfolio__name">Ahuse</h4>
                            <p className="portfolio__descraption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                            <Link className="portfolio__link" href="">View In Dribbble <img className="portfolio__img3" src="/vector.svg" alt="" /></Link>
                            <span className="portfolio__span"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
