"use client";
import { useState } from "react";
import Link from "next/link";
import "./style.css"

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="nav">
            <div className="container nav__container">
                <img className="nav__img" src="/logo.svg" alt="logo" />

                <button
                    className={`hamburger ${open ? "active" : ""}`}
                    aria-label="Toggle menu"
                    onClick={() => setOpen(!open)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav__list ${open ? "open" : ""}`}>
                    <li className="nav__item">
                        <Link href="/" className="nav__link" onClick={() => setOpen(false)}>Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link href="/" className="nav__link" onClick={() => setOpen(false)}>Portfolio</Link>
                    </li>
                    <li className="nav__item">
                        <Link href="/" className="nav__link" onClick={() => setOpen(false)}>About Us</Link>
                    </li>
                    <li className="nav__item">
                        <Link href="/" className="nav__link" onClick={() => setOpen(false)}>Testimonials</Link>
                    </li>
                </ul>

                <button className="nav__btn">Contact Me</button>
            </div>
        </nav>
    );
}
