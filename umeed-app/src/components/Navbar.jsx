import React, { useState } from "react";
import { Heart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "ABOUT", href: "#spring-fest" },
    { label: "INITIATIVES", href: "#initiatives" },
    { label: "CONTACT US", href: "#get-involved" }
  ];

  return (
    <>
      <nav className="nav-strip-solid">
        <div className="container" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Heart size={28} color="#0f172a" fill="#0f172a" strokeWidth={2.5} />
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

          {/* Desktop Links */}
          <div className="nav-links hide-mobile" style={{
            display: "flex",
            gap: "clamp(1rem, 3vw, 2.5rem)",
            alignItems: "center"
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

          {/* Hamburger Button (Mobile) */}
          <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle Menu">
            <Menu size={28} />
          </button>
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
