import React from 'react';
import creativeImg from '../assets/creative.webp';
import mentalImg from '../assets/mental_.webp';

export default function CreativeHealing() {
    const healingActivities = [
        {
            title: "Canvas Painting & Art Therapy Corner",
            description: "Open creative booths where participants can express their emotions through painting, doodling, or clay art. Guided by therapists and volunteers, the space promotes relaxation, self-expression, and mental well-being.",
            image: creativeImg
        },
        {
            title: "Mindfulness & Meditation Circles",
            description: "Short guided sessions in open spaces featuring yoga, breathing exercises, and grounding practices to promote calm and focus throughout the day.",
            image: mentalImg
        }
    ];

    return (
        <section id="creative-healing" className="section-padding" style={{
            background: 'linear-gradient(135deg, #7dd3fc 0%, #bae6fd 50%, #e0f2fe 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Texture Overlay */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                opacity: 0.3,
                backgroundImage: 'url("https://www.transparenttextures.com/patterns/pinstriped-suit.png")',
                pointerEvents: 'none'
            }}></div>

            <div className="container">
                {/* Section Header */}
                <div className="scroll-reveal text-center" style={{ marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                        border: 'none',
                        padding: 0,
                        fontWeight: 900,
                        color: '#0f172a',
                        textAlign: 'center',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                    }}>
                        Creative Expression for Healing
                    </h2>
                </div>

                {/* Two Column Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem',
                    alignItems: 'start'
                }}>
                    {healingActivities.map((activity, index) => (
                        <div
                            key={index}
                            className={`scroll-reveal stagger-${index + 1}`}
                            style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            {/* Image */}
                            <div style={{
                                borderRadius: '1rem',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                                marginBottom: '1.5rem',
                                border: '4px solid white'
                            }}>
                                <img
                                    src={activity.image}
                                    alt={activity.title}
                                    style={{
                                        width: '100%',
                                        height: '280px',
                                        objectFit: 'cover',
                                        display: 'block'
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <h3 style={{
                                fontSize: '1.1rem',
                                fontWeight: 800,
                                color: '#0f172a',
                                marginBottom: '1rem',
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                letterSpacing: '0.03em',
                                textTransform: 'uppercase'
                            }}>
                                {activity.title}
                            </h3>
                            <p style={{
                                fontSize: '1rem',
                                color: '#334155',
                                lineHeight: 1.7,
                                margin: 0,
                                fontWeight: 400,
                                fontStyle: 'italic'
                            }}>
                                {activity.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
