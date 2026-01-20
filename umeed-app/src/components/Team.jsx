import React from 'react';
import { Facebook, Instagram, Linkedin, Phone } from 'lucide-react';
import anubhabImg from '../assets/Anubhab Sharma.webp';
import anuradhaImg from '../assets/Anuradha Singh.webp';
import rohitImg from '../assets/Rohit sahoo.webp';

export default function Team() {
    const teamMembers = [
        {
            name: "Anubhab Sharma",
            role: "Publicity and Media Outreach | Tech Coordinator",
            image: anubhabImg,
            socials: {
                facebook: "https://facebook.com/people/Anubhab-Sharma",
                instagram: "https://instagram.com",
                linkedin: "https://linkedin.com/in/anubhab-sharma-aa4a31283",
                whatsapp: "https://wa.me/919073070157"
            }
        },
        {
            name: "Anuradha Singh",
            role: "Publicity and Media Outreach",
            image: anuradhaImg,
            socials: {
                facebook: "https://facebook.com/people/Anuradha-Singh",
                instagram: "https://instagram.com",
                linkedin: "https://linkedin.com/in/anuradha-singh-5b946b323",
                whatsapp: "https://wa.me/918958578751"
            }
        },
        {
            name: "Rohit Sahoo",
            role: "Publicity and Media Outreach",
            image: rohitImg,
            socials: {
                facebook: "https://www.facebook.com/rani.suresh.165033",
                instagram: "https://www.instagram.com/rohitt__xy/",
                linkedin: "https://linkedin.com/in/rohit-sahoo-4704a6293",
                whatsapp: "https://wa.me/919849015612"
            }
        }
    ];

    return (
        <section id="our-team" className="section-padding" style={{
            background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
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
                        fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                        border: 'none',
                        padding: 0,
                        fontWeight: 900,
                        color: '#0f172a',
                        textAlign: 'center'
                    }}>
                        OUR <span style={{ color: '#0284c7' }}>TEAM</span>
                    </h2>
                    <div style={{
                        width: '100px',
                        height: '4px',
                        background: 'var(--accent-color)',
                        margin: '1.5rem auto'
                    }}></div>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#475569',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.6
                    }}>
                        Meet the passionate individuals driving the UMEED initiative forward
                    </p>
                </div>

                {/* Team Members Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '3rem',
                    justifyItems: 'center',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className={`scroll-reveal stagger-${index + 1}`}
                            style={{
                                background: 'white',
                                borderRadius: '2rem',
                                padding: '2rem',
                                textAlign: 'center',
                                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.1)',
                                border: '1px solid rgba(255, 255, 255, 0.8)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                width: '100%',
                                maxWidth: '320px'
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(0, 0, 0, 0.15)';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 20px 40px -15px rgba(0, 0, 0, 0.1)';
                            }}
                        >
                            {/* Profile Image */}
                            <div style={{
                                width: '180px',
                                height: '180px',
                                margin: '0 auto 1.5rem',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '4px solid #bae6fd',
                                boxShadow: '0 10px 30px rgba(2, 132, 199, 0.2)'
                            }}>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>

                            {/* Member Info */}
                            <h3 style={{
                                fontSize: '1.6rem',
                                fontWeight: 800,
                                color: '#0f172a',
                                marginBottom: '0.5rem',
                                fontFamily: "'Gochi Hand', cursive"
                            }}>
                                {member.name}
                            </h3>
                            <p style={{
                                fontSize: '0.9rem',
                                color: '#0284c7',
                                fontWeight: 600,
                                margin: 0,
                                marginBottom: '1rem',
                                letterSpacing: '0.02em',
                                lineHeight: 1.4
                            }}>
                                {member.role}
                            </p>

                            {/* Social Links */}
                            {member.socials && (
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: '0.75rem',
                                    marginTop: '1rem'
                                }}>
                                    <a
                                        href={member.socials.facebook}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            background: '#e0f2fe',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#1877f2',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseOver={e => {
                                            e.currentTarget.style.background = '#1877f2';
                                            e.currentTarget.style.color = 'white';
                                        }}
                                        onMouseOut={e => {
                                            e.currentTarget.style.background = '#e0f2fe';
                                            e.currentTarget.style.color = '#1877f2';
                                        }}
                                    >
                                        <Facebook size={20} />
                                    </a>
                                    <a
                                        href={member.socials.instagram}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            background: '#fce7f3',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#e1306c',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseOver={e => {
                                            e.currentTarget.style.background = '#e1306c';
                                            e.currentTarget.style.color = 'white';
                                        }}
                                        onMouseOut={e => {
                                            e.currentTarget.style.background = '#fce7f3';
                                            e.currentTarget.style.color = '#e1306c';
                                        }}
                                    >
                                        <Instagram size={20} />
                                    </a>
                                    <a
                                        href={member.socials.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            background: '#e0f2fe',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#0077b5',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseOver={e => {
                                            e.currentTarget.style.background = '#0077b5';
                                            e.currentTarget.style.color = 'white';
                                        }}
                                        onMouseOut={e => {
                                            e.currentTarget.style.background = '#e0f2fe';
                                            e.currentTarget.style.color = '#0077b5';
                                        }}
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                    <a
                                        href={member.socials.whatsapp}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            background: '#dcfce7',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#25d366',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseOver={e => {
                                            e.currentTarget.style.background = '#25d366';
                                            e.currentTarget.style.color = 'white';
                                        }}
                                        onMouseOut={e => {
                                            e.currentTarget.style.background = '#dcfce7';
                                            e.currentTarget.style.color = '#25d366';
                                        }}
                                    >
                                        <Phone size={20} />
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
