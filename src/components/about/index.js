import "./style.css"
export default function About() {
    return (
        <section className="about">
            <div className="container about__container">
                <img className="about__img" src="/me.png" alt="" />
                <div className="about__content">
                    <h2 className="about__title">About</h2>
                    <h3 className="about__sub-title">About Me</h3>
                    <p className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.</p>
                    <p className="about__text">Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.</p>
                </div>
            </div>
        </section>
    )
}
