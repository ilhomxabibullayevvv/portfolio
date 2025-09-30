import "./style.css"
export default function Hero() {
  return (
    <section className="hero">
        <div className="container hero__container">
            <div className="hero__content">
                <h2 className="hero__title">Hey, I am John</h2>
                <h3 className="hero__sub-title">I create <span className="hero__span">product design</span> and brand experience</h3>
                <p className="hero__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <button className="hero__btn">Get In Touch</button>
            </div>
            <img className="hero__img" src="/male.png" alt="" />
        </div>
    </section>
  )
}
