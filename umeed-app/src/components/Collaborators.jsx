import React from 'react';
import unesco from '../assets/unesco.png';
import cry from '../assets/cry.png';
import blood from '../assets/blood.png';
import youwecan from '../assets/youwecan.webp';

export default function Collaborators() {
  const partners = [
    { name: "UNESCO", img: unesco },
    { name: "CRY", img: cry },
    { name: "BLOOD", img: blood },
    { name: "YOUWECAN", img: youwecan }
  ];

  return (
    <section className="section-padding" style={{
      background: 'linear-gradient(rgba(224, 242, 254, 0.7), rgba(224, 242, 254, 0.4)), url("https://www.transparenttextures.com/patterns/pinstriped-suit.png")',
      paddingTop: '3rem',
      paddingBottom: '8rem'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Responsive Logos Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "2rem",
          maxWidth: "1100px",
          width: "100%",
          marginBottom: "4rem"
        }}>
          {partners.map((p, i) => (
            <div key={i} className="scroll-reveal" style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <div style={{
                width: "100%",
                aspectRatio: "16 / 9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem"
              }}>
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      transition: "transform 0.4s ease"
                    }}
                    onMouseOver={e => e.currentTarget.style.transform = "scale(1.1)"}
                    onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                  />
                ) : (
                  <div style={{
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    color: "rgba(15, 23, 42, 0.2)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase"
                  }}>
                    {p.name}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Section Header Below Grid */}
        <div className="scroll-reveal text-center">
          <h2 style={{
            border: "none",
            padding: 0,
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 900,
            color: "#0f172a",
            letterSpacing: "-0.02em",
            marginBottom: "0.5rem",
            textAlign: "center"
          }}>
            OUR COLLABORATORS
          </h2>
          <div style={{
            width: "80px",
            height: "6px",
            background: "var(--accent-color)",
            margin: "0 auto",
            borderRadius: "10px"
          }}></div>
        </div>
      </div>
    </section>
  );
}
