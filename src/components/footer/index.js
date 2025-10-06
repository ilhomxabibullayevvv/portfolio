import Link from "next/link";
import "./style.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__content">
                    <img className="footer__icon" src="/logo.svg" alt="logo" />
                    <ul className="footer__list">
                        <li className="footer__item">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="footer__item">
                            <Link href="/">Portfolio</Link>
                        </li>
                        <li className="footer__item">
                            <Link href="/">About Me</Link>
                        </li>
                        <li className="footer__item">
                            <Link href="/">Contact</Link>
                        </li>
                        <li className="footer__item">
                            <Link href="/">Testimonials</Link>
                        </li>
                    </ul>
                </div>
                <span className="footer__span"></span>
                <div className="footer__content">
                    <h2 className="footer__title">Made with 💖 by Airdokan</h2>
                    <ul className="footer__list">
                        <li className="footer__item">Privacy Policy</li>
                        <li className="footer__item">Terms of Service</li>
                        <li className="footer__item">Cookies Settings</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
