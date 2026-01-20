import React from 'react';
import {
  ShieldCheck,
  DoorOpen,
  BrainCircuit,
  Users2,
  TrendingUp
} from 'lucide-react';

export default function Impact() {
  const impacts = [
    {
      title: "Early Support and Prevention",
      desc: "Raising awareness helps people recognize symptoms early, allowing timely support before problems become severe.",
      icon: <ShieldCheck size={28} color="#0284c7" />
    },
    {
      title: "Reduced Stigma and More Openness",
      desc: "Normalizing conversations about mental health encourages individuals to seek help without fear or judgment.",
      icon: <DoorOpen size={28} color="#0284c7" />
    },
    {
      title: "Stronger Coping and Resilience Skills",
      desc: "Teaching stress management, emotional regulation, and mindfulness helps people manage daily challenges confidently.",
      icon: <BrainCircuit size={28} color="#0284c7" />
    },
    {
      title: "Healthier Relationships and Communities",
      desc: "Better mental well-being improves communication, empathy, and trust, creating supportive families and communities.",
      icon: <Users2 size={28} color="#0284c7" />
    },
    {
      title: "Improved Productivity and Quality of Life",
      desc: "Good mental health enhances focus, motivation, and overall life satisfaction, leading to better performance at work, school, and home.",
      icon: <TrendingUp size={28} color="#0284c7" />
    }
  ];

  return (
    <section id="impact" className="section-padding" style={{
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
        <div className="scroll-reveal" style={{ marginBottom: "5rem" }}>
          <h2 style={{
            border: "none",
            padding: 0,
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            fontWeight: 800,
            color: "#0f172a",
            textAlign: 'left',
            letterSpacing: '-0.02em'
          }}>
            THE IMPACT WE CAN CREATE
          </h2>
        </div>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          maxWidth: '1000px'
        }}>
          {impacts.map((item, i) => (
            <div key={i} className={`scroll-reveal stagger-${i + 1}`} style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "2.5rem"
            }}>
              {/* Icon Container with Keyhole/Stem Style */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flexShrink: 0,
                position: 'relative'
              }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "white",
                  border: "2px solid rgba(255, 255, 255, 0.8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                  zIndex: 2
                }}>
                  {item.icon}
                </div>
                {/* The "Stem" beneath the circle */}
                <div style={{
                  width: "12px",
                  height: "25px",
                  background: "rgba(255, 255, 255, 0.5)",
                  marginTop: "-1px",
                  borderRadius: "0 0 6px 6px",
                  zIndex: 1
                }}></div>
              </div>

              {/* Text Area */}
              <div style={{ paddingTop: "0.4rem" }}>
                <h3 style={{
                  margin: 0,
                  fontSize: "1.3rem",
                  fontWeight: 800,
                  color: "#0f172a",
                  marginBottom: "0.6rem"
                }}>
                  {item.title}
                </h3>
                <p style={{
                  margin: 0,
                  fontSize: "1.05rem",
                  color: "#334155",
                  lineHeight: 1.5,
                  fontWeight: 500
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
