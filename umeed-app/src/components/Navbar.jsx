import React, { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import iitkgpLogo from "../assets/iitkgp.webp";
import sfLogo from "../assets/sf_logo.webp";
import newLogo from "../assets/new1.webp";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { label: "ABOUT", href: "#spring-fest" },
        { label: "INITIATIVES", href: "#initiatives" },
        { label: "OUR TEAM", href: "#our-team" },
        { label: "CONTACT US", href: "#get-involved" }
    ];

    return (
        <>
            <nav className="nav-strip-solid">
                <div className="container" style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "100%",
                    padding: "0 2rem"
                }}>
                    {/* Left Side - SF Logo and UMEED */}
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        {/* Spring Fest Logo */}
                        <img
                            src={sfLogo}
                            alt="Spring Fest"
                            className="sf-logo-responsive"
                            style={{ height: "40px", width: "auto" }}
                        />
                        <h2 style={{
                            margin: 0,
                            fontSize: "1.5rem",
                            fontWeight: 400,
                            color: "#0f172a",
                            border: "none",
                            padding: 0,
                            letterSpacing: "0.02em"
                        }}>
                            UMEED
                        </h2>
                    </div>

                    {/* Center - Desktop Links */}
                    <div className="nav-links hide-mobile" style={{
                        display: "flex",
                        gap: "clamp(1rem, 3vw, 2.5rem)",
                        alignItems: "center",
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)"
                    }}>
                        {navLinks.map((link) => (
                            <a key={link.label} href={link.href} style={{
                                color: "var(--text-secondary)",
                                textDecoration: "none",
                                fontWeight: 700,
                                fontSize: "clamp(0.7rem, 2vw, 0.85rem)",
                                letterSpacing: "0.05em"
                            }}>
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right Side - IIT KGP and New Logos (Desktop Only) */}
                    <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <img
                            src={newLogo}
                            alt="New"
                            style={{ height: "40px", width: "auto" }}
                        />
                        <img
                            src={iitkgpLogo}
                            alt="IIT Kharagpur"
                            style={{ height: "40px", width: "auto", filter: "invert(1)" }}
                        />
                    </div>

                    {/* Right Side - Logos + Hamburger (Mobile Only) */}
                    <div className="show-mobile" style={{ display: "none", alignItems: "center", gap: "0.75rem" }}>
                        <img
                            src={newLogo}
                            alt="New"
                            style={{ height: "32px", width: "auto" }}
                        />
                        <img
                            src={iitkgpLogo}
                            alt="IIT Kharagpur"
                            style={{ height: "32px", width: "auto", filter: "invert(1)" }}
                        />
                        <button
                            className="hamburger-btn"
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "none",
                                border: "none",
                                color: "var(--text-primary)",
                                cursor: "pointer",
                                padding: "0.5rem"
                            }}
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isOpen ? 'is-open' : ''}`}>
                <button className="mobile-menu-close" onClick={toggleMenu} aria-label="Close Menu">
                    <X size={32} />
                </button>
                {navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="mobile-menu-link"
                        onClick={toggleMenu}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </>
    );
}
