import React from 'react';

// Import Assets
import prabal0 from '../assets/prabal.webp';
import prabal1 from '../assets/prabal1.webp';
import prabal2 from '../assets/prabal2.webp';
import prabal3 from '../assets/prabal3.webp';

import pukaar0 from '../assets/pukaar.webp';
import pukaar1 from '../assets/pukaar1.webp';
import pukaar2 from '../assets/pukaar2.webp';
import pukaar3 from '../assets/pukaar3.webp';

import masum0 from '../assets/massom.webp';
import masum1 from '../assets/masum1.webp';
import masum2 from '../assets/masum2.webp';
import masum3 from '../assets/masum3.webp';

import lastImg from '../assets/last.webp';

export default function PreviousWorks() {
  const sections = [
    {
      year: "PRABAL-2024",
      desc: (
        <>
          In 2024, in association with <strong>YouWeCan</strong> and <strong>DKMS-BMST</strong>, Spring Fest adopted the cause of <strong>PRABAL - Fighting Stronger, One Cell At A Time</strong>. This initiative was to fight against blood cancer by early screening and testing. We had setup stalls for people to test themselves. We had also organized a workshop on breast cancer awareness.
        </>
      ),
      layout: "grid-4",
      images: [prabal0, prabal1, prabal2, prabal3]
    },
    {
      year: "PUKAAR-2023",
      desc: (
        <>
          In 2023, in association with <strong>UNICEF & CRY</strong>, Springfest adopted the cause of <strong>PUKAAR - Fulfilling a Silent Demand</strong>. This initiative aims to raise awareness about children's rights and to ensure that all children have access to necessities such as food, shelter, education, and healthcare.
        </>
      ),
      layout: "side-images",
      images: [pukaar0, pukaar1, pukaar2, pukaar3]
    },
    {
      year: "MASOOMIYAT-2017",
      desc: (
        <>
          <strong>Masoomiyat</strong> theme was chosen to raise awareness about the importance of childhood and promote children's rights. The theme also aimed to remind people of youth's innocence and joy and encourage them to protect and nurture children.
        </>
      ),
      layout: "floating-images",
      images: [masum0, masum1, masum2, masum3]
    }
  ];

  return (
    <div id="previous-works">
      <div className="container" style={{ paddingTop: '5rem' }}>
        <div className="scroll-reveal text-center">
          <h2 style={{ border: "none", fontSize: "clamp(2.5rem, 8vw, 4.5rem)", padding: 0, fontWeight: 900 }}>OUR PREVIOUS WORKS</h2>
        </div>
      </div>

      {sections.map((section, idx) => (
        <section key={idx} className="section-padding" style={{
          background: 'linear-gradient(rgba(186, 230, 253, 0.4), rgba(186, 230, 253, 0.2)), url("https://www.transparenttextures.com/patterns/clean-gray-paper.webp")',
          marginBottom: '2rem'
        }}>
          <div className="container">
            <div className="scroll-reveal text-center" style={{ marginBottom: "3rem" }}>
              <div style={{
                display: "inline-block",
                padding: "0.4rem 2.5rem",
                background: "#fbcfe8", // Pink highlight
                color: "#831843",
                borderRadius: "4px",
                fontWeight: 800,
                fontSize: "1.4rem",
                marginBottom: "2rem",
                boxShadow: "0 4px 15px rgba(219, 39, 119, 0.1)"
              }}>
                {section.year}
              </div>

              {section.layout === "grid-4" && (
                <>
                  <p className="mx-auto" style={{ maxWidth: "900px", fontSize: "1.3rem", lineHeight: 1.6, color: "#1e293b", fontWeight: 500, marginBottom: '4rem' }}>
                    {section.desc}
                  </p>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "1.5rem"
                  }}>
                    {section.images.map((img, i) => (
                      <div key={i} className="scroll-reveal" style={{
                        background: '#fff',
                        padding: '10px',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                        borderRadius: '8px',
                        transition: 'transform 0.3s ease'
                      }}
                        onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                      >
                        <div style={{
                          width: '100%',
                          aspectRatio: '3 / 4',
                          borderRadius: '4px',
                          overflow: 'hidden'
                        }}>
                          <img
                            src={img}
                            alt={`${section.year} - ${i}`}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              display: 'block'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {section.layout === "side-images" && (
                <div className="split-layout" style={{ gap: '4rem', alignItems: 'center' }}>
                  <p style={{ fontSize: "1.35rem", lineHeight: 1.7, color: "#1e293b", fontWeight: 500, margin: 0, textAlign: 'left' }}>
                    {section.desc}
                  </p>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.5rem',
                    width: '100%'
                  }}>
                    {section.images.slice(0, 4).map((img, i) => (
                      <div key={i} style={{
                        background: '#fff',
                        padding: '8px',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        borderRadius: '4px',
                        transform: i % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)'
                      }}>
                        <div style={{ height: '180px', overflow: 'hidden' }}>
                          <img src={img} alt={`${section.year} - ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.layout === "floating-images" && (
                <div className="split-layout" style={{ gap: '6rem', alignItems: 'center' }}>
                  <p style={{ fontSize: "1.4rem", lineHeight: 1.8, color: "#1e293b", fontWeight: 600, margin: 0, textAlign: 'left' }}>
                    {section.desc}
                  </p>

                  <div className="hide-mobile" style={{
                    position: 'relative',
                    height: '400px',
                    width: '100%'
                  }}>
                    {section.images.map((img, i) => {
                      const positions = [
                        { top: '0', left: '0', rot: '-10deg' },
                        { top: '40px', right: '0', rot: '8deg' },
                        { bottom: '20px', left: '40px', rot: '5deg' },
                        { bottom: '0', right: '40px', rot: '-5deg' }
                      ];
                      const pos = positions[i] || positions[0];
                      return (
                        <div key={i} style={{
                          position: 'absolute',
                          ...pos,
                          background: '#fff',
                          padding: '8px',
                          boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                          borderRadius: '4px',
                          width: '200px',
                          transform: `rotate(${pos.rot})`,
                          zIndex: i
                        }}>
                          <img src={img} alt={`${section.year} - ${i}`} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                        </div>
                      );
                    })}
                  </div>

                  <div className="show-mobile" style={{ display: 'none' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                      {section.images.slice(0, 2).map((img, i) => (
                        <div key={i} style={{ background: '#fff', padding: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', borderRadius: '4px' }}>
                          <img src={img} alt={`${section.year} - ${i}`} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
      {/* Legacy / Last Poster Section */}
      <section className="section-padding" style={{
        background: 'linear-gradient(rgba(186, 230, 253, 0.4), rgba(186, 230, 253, 0.2)), url("https://www.transparenttextures.com/patterns/clean-gray-paper.webp")',
        paddingTop: '2rem'
      }}>
        <div className="container" style={{ maxWidth: '1350px' }}>
          <div className="scroll-reveal" style={{
            width: '100%',
            marginBottom: '4rem'
          }}>
            <img
              src={lastImg}
              alt="Legacy Initiatives Poster"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          <div className="scroll-reveal" style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            marginTop: '4rem',
            textAlign: 'center',
            gap: '2rem'
          }}>
            <div style={{ flex: '1 1 250px' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0f172a' }}>PRAYATN-2020</h3>
            </div>
            <div style={{ flex: '1 1 250px' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0f172a' }}>UNNATI-2025</h3>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0f172a', marginTop: '1.5rem' }}>SAKSHAM-2019</h3>
            </div>
            <div style={{ flex: '1 1 250px' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0f172a' }}>SANKALP-2022</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
