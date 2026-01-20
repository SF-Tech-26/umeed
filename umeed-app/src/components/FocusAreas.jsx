import React from 'react';
import { Search, Leaf, Church, UserCheck, Heart } from 'lucide-react';

export default function FocusAreas() {
    const areas = [
        {
            title: "BUILDING EMOTIONAL RESILIENCE",
            desc: "Teaching practical skills to manage stress, regulate emotions, and cope with challenges.",
            icon: <Leaf size={24} color="#0f172a" />
        },
        {
            title: "CREATING SAFE SPACES",
            desc: "Encouraging open, judgment-free discussions so individuals feel comfortable seeking help.",
            icon: <Church size={24} color="#0f172a" />
        },
        {
            title: "IMPROVING ACCESS TO SUPPORT",
            desc: "Connecting people with counseling, helplines, and professional guidance easily and quickly.",
            icon: <UserCheck size={24} color="#0f172a" />
        },
        {
            title: "PROMOTING OVERALL WELLBEING",
            desc: "Focusing on healthy habits such as good sleep, nutrition, physical activity, and mindfulness for better emotional balance.",
            icon: <Heart size={24} color="#0f172a" />
        },
        {
            title: "AWARENESS AND EARLY IDENTIFICATION",
            desc: "Helping people recognize signs of stress, anxiety, and emotional struggle at an early stage",
            icon: <Search size={24} color="#0f172a" />
        }
    ];

    const areaPositions = [
        { top: '-5%', left: '50%', align: 'center' }, // Resilience (Top)
        { top: '35%', left: '100%', align: 'left' },   // Safe Spaces (Right)
        { top: '95%', left: '85%', align: 'left' },   // Access (Bottom Right)
        { top: '95%', left: '15%', align: 'right' },  // Wellbeing (Bottom Left)
        { top: '35%', left: '0%', align: 'right' }    // Awareness (Left)
    ];

    return (
        <section id="focus-areas" className="section-padding" style={{ background: 'transparent' }}>
            <div className="container text-center">
                <div className="scroll-reveal" style={{ marginBottom: '6rem' }}>
                    <h2 style={{
                        fontSize: '4rem',
                        border: 'none',
                        padding: 0,
                        textAlign: 'center',
                        color: '#0f172a',
                        fontFamily: "'Gochi Hand', cursive"
                    }}>
                        OUR FOCUS AREAS
                    </h2>
                </div>

                {/* Segmented Annular Chart Diagram (Hidden on Mobile) */}
                <div className="hide-mobile" style={{
                    position: 'relative',
                    maxWidth: '1200px',
                    height: '700px',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {/* SVG Segmented Hub and Icons centered in a square container */}
                    <div style={{ position: 'relative', width: '600px', height: '600px', flexShrink: 0 }}>
                        <svg width="600" height="600" viewBox="0 0 400 400" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.05))' }}>
                            <defs>
                                <linearGradient id="segGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="rgba(186, 230, 253, 0.4)" />
                                    <stop offset="100%" stopColor="rgba(186, 230, 253, 0.1)" />
                                </linearGradient>
                            </defs>

                            {areaPositions.map((p, i) => {
                                const mid = i * 72 - 90;
                                const startAngle = (mid - 32) * (Math.PI / 180);
                                const endAngle = (mid + 32) * (Math.PI / 180);
                                const innerR = 100;
                                const outerR = 165;

                                const x1 = 200 + outerR * Math.cos(startAngle);
                                const y1 = 200 + outerR * Math.sin(startAngle);
                                const x2 = 200 + outerR * Math.cos(endAngle);
                                const y2 = 200 + outerR * Math.sin(endAngle);
                                const x3 = 200 + innerR * Math.cos(endAngle);
                                const y3 = 200 + innerR * Math.sin(endAngle);
                                const x4 = 200 + innerR * Math.cos(startAngle);
                                const y4 = 200 + innerR * Math.sin(startAngle);

                                const d = `
                              M ${x1} ${y1}
                              A ${outerR} ${outerR} 0 0 1 ${x2} ${y2}
                              L ${x3} ${y3}
                              A ${innerR} ${innerR} 0 0 0 ${x4} ${y4}
                              Z
                            `;

                                return (
                                    <path
                                        key={i}
                                        d={d}
                                        fill="url(#segGrad)"
                                        stroke="rgba(255,255,255,0.9)"
                                        strokeWidth="3"
                                        className="scroll-reveal"
                                        style={{ transition: 'all 0.3s ease' }}
                                    />
                                );
                            })}
                        </svg>

                        {/* Icons inside segments - Precision Centering */}
                        {areaPositions.map((p, i) => {
                            const angle = (i * 72 - 90) * (Math.PI / 180);
                            const dashR = 132.5; // (100 + 165) / 2
                            const x = 200 + dashR * Math.cos(angle);
                            const y = 200 + dashR * Math.sin(angle);

                            return (
                                <div key={i} style={{
                                    position: 'absolute',
                                    left: `${(x / 400) * 100}%`,
                                    top: `${(y / 400) * 100}%`,
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: 2,
                                    color: '#0369a1',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {React.cloneElement(areas[i].icon, {
                                        size: 32,
                                        strokeWidth: 2.5,
                                        color: 'currentColor'
                                    })}
                                </div>
                            );
                        })}

                        {/* Central Area heart */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '180px',
                            height: '180px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.4)',
                            border: '1px solid rgba(255,255,255,0.6)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 3,
                            backdropFilter: 'blur(8px)',
                            boxShadow: 'inset 0 0 30px rgba(2, 132, 199, 0.05)'
                        }}>
                            <div style={{ opacity: 0.15 }}>
                                <Heart size={100} color="#0284c7" fill="#0284c7" />
                            </div>
                        </div>
                    </div>

                    {/* Descriptive boxes - Pushed further out */}
                    {areas.map((area, i) => {
                        const p = areaPositions[i];
                        return (
                            <div key={i} className={`scroll-reveal stagger-${i + 1}`} style={{
                                position: 'absolute',
                                top: p.top,
                                left: p.left,
                                transform: 'translate(-50%, -50%)',
                                width: '320px',
                                textAlign: p.align,
                                zIndex: 4
                            }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: p.align === 'center' ? 'center' : (p.align === 'left' ? 'flex-start' : 'flex-end') }}>
                                    <h3 style={{
                                        margin: 0,
                                        fontSize: '1.3rem',
                                        fontWeight: 800,
                                        color: '#0f172a',
                                        marginBottom: '0.6rem',
                                        letterSpacing: '0.02em',
                                        fontFamily: "'Gochi Hand', cursive"
                                    }}>
                                        {area.title}
                                    </h3>
                                    <p style={{
                                        margin: 0,
                                        fontSize: '0.95rem',
                                        color: '#475569',
                                        lineHeight: 1.5,
                                        fontWeight: 500
                                    }}>
                                        {area.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile List (Shown on Mobile) */}
                <div className="show-mobile" style={{ display: 'none', textAlign: 'left', padding: '0 1rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {areas.map((area, i) => (
                            <div key={i} className="scroll-reveal glass-card" style={{ padding: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                    <div style={{ padding: '1rem', background: '#bae6fd', borderRadius: '1rem', color: '#0369a1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {area.icon}
                                    </div>
                                    <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800, lineHeight: 1.2, color: '#0f172a', fontFamily: "'Gochi Hand', cursive" }}>{area.title}</h3>
                                </div>
                                <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.6, color: '#475569', fontWeight: 500 }}>{area.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
