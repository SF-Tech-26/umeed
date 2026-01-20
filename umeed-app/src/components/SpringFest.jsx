import React from 'react';
import platform from '../assets/platform.png';
import sf1 from '../assets/sf1.webp';
import sf2 from '../assets/sf2.jpeg';
import sf3 from '../assets/sf3.jpg';
import sf4 from '../assets/sf4.webp';

export default function SpringFest() {
    return (
        <div id="spring-fest" style={{ scrollMarginTop: '100px' }}>
            {/* Section 1: What is Spring Fest? Dynamic Collage */}
            <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', paddingTop: '1rem' }}>
                <div className="container">
                    <div className="scroll-reveal text-center" style={{ marginBottom: '1.5rem' }}>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 10vw, 4.5rem)', border: 'none', padding: 0, fontWeight: 900 }}>WHAT IS SPRING FEST?</h2>
                    </div>

                    {/* Dynamic CSS Polaroid Collage (Desktop) */}
                    <div className="scroll-reveal hide-mobile" style={{
                        height: '550px',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '4rem'
                    }}>
                        {/* Fanned out Polaroids - No handprint icon in middle */}
                        {[
                            { rot: '-15deg', x: '-260px', y: '-30px', img: sf1 },
                            { rot: '8deg', x: '-120px', y: '60px', img: sf2 },
                            { rot: '-10deg', x: '140px', y: '-50px', img: sf3 },
                            { rot: '15deg', x: '280px', y: '30px', img: sf4 }
                        ].map((p, i) => (
                            <div key={i} className={`glass-card animate-float-${i % 2}`} style={{
                                position: 'absolute',
                                width: '240px',
                                height: '300px',
                                padding: '3px', /* Minimal border */
                                transform: `translate(${p.x}, ${p.y}) rotate(${p.rot})`,
                                zIndex: i,
                                background: 'white',
                                border: '1px solid rgba(2, 132, 199, 0.2)',
                                boxShadow: '0 0 20px rgba(2, 132, 199, 0.25), 0 5px 15px rgba(0,0,0,0.1)' /* Glow added */
                            }}>
                                <div style={{
                                    height: '294px', /* Adjusted for 3px padding */
                                    overflow: 'hidden',
                                    borderRadius: '0.4rem'
                                }}>
                                    <img
                                        src={p.img}
                                        alt={`SF Moment ${i + 1}`}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Simple Grid Collage (Mobile) */}
                    <div className="show-mobile" style={{ display: 'none', marginBottom: '4rem' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '1rem'
                        }}>
                            {[sf1, sf2, sf3, sf4].map((img, i) => (
                                <div key={i} className="glass-card" style={{ padding: '4px', background: 'white' }}>
                                    <div style={{ aspectRatio: '1/1', overflow: 'hidden', borderRadius: '0.4rem' }}>
                                        <img src={img} alt={`SF ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: True Spirit of Youth (Banner) */}
            <section style={{
                height: '60vh',
                minHeight: '400px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}>
                <div className="container text-center">
                    <h2 className="scroll-reveal" style={{
                        color: 'white',
                        fontSize: 'clamp(3rem, 10vw, 8rem)',
                        border: 'none',
                        padding: 0,
                        textShadow: '0 10px 30px rgba(0,0,0,0.5)',
                        letterSpacing: '0.05em'
                    }}>
                        THE TRUE SPIRIT OF YOUTH
                    </h2>
                </div>
            </section>

            {/* Section 3: Platform for Change */}
            <section className="section-padding">
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '4rem',
                        alignItems: 'center'
                    }}>
                        <div className="scroll-reveal">
                            <h2 style={{ border: 'none', padding: 0, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#3b82f6', marginBottom: '2rem', fontWeight: 800 }}>
                                SPRING FEST: A PLATFORM FOR CHANGE
                            </h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.6, color: 'var(--text-secondary)', fontWeight: 500 }}>
                                Spring Fest, the annual social and cultural festival of IIT Kharagpur,
                                is one of India's most vibrant campus celebrations. It celebrates youth
                                their creativity, passion, and energy while also serving as a platform
                                for social change. Each year, the fest adopts a meaningful social cause,
                                driving awareness and inspiring action through its events and initiatives.
                            </p>
                        </div>
                        <div className="scroll-reveal stagger-2">
                            <img
                                src={platform}
                                alt="Platform for Change Collage"
                                style={{ width: '100%', height: 'auto', borderRadius: '1rem', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
