import { Brain, Users, MessageSquare } from 'lucide-react';
import mental from '../assets/mental.webp';

export default function WhyMentalHealth() {
  const cards = [
    {
      title: "The Silent Crisis",
      desc: "IIT Kharagpur and campuses across India have faced tragic student suicides, revealing the urgent need to address mental well-being.",
      icon: <Brain size={22} color="#3b82f6" />,
      bg: "rgba(59, 130, 246, 0.1)"
    },
    {
      title: "Hidden Struggles",
      desc: "The pressure to excel often hides silent struggles that students face daily in their academic and personal lives.",
      icon: <Users size={22} color="#3b82f6" />, // Closest match to "Hidden Struggles" users with briefcase
      bg: "rgba(59, 130, 246, 0.1)"
    },
    {
      title: "Breaking the Stigma",
      desc: "Through Mental Health as our social theme, we aim to encourage open conversations and build a culture of care and empathy.",
      icon: <MessageSquare size={22} color="#3b82f6" />,
      bg: "rgba(59, 130, 246, 0.1)"
    }
  ];

  return (
    <section id="why-mental-health" className="section-padding" style={{ background: '#f8fafc' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Left Side: Illustrative Image */}
          <div className="scroll-reveal">
            <div style={{
              borderRadius: '2rem',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.8)'
            }}>
              <img
                src={mental}
                alt="Mental Health Illustration"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>

          {/* Right Side: Content & Cards */}
          <div className="scroll-reveal stagger-2">
            <h2 style={{
              border: "none",
              padding: 0,
              fontSize: "clamp(2.5rem, 8vw, 3.5rem)",
              lineHeight: 1.1,
              marginBottom: "3rem",
              color: "#0f172a",
              fontWeight: 900
            }}>
              WHY <span style={{ color: "#0284c7" }}>MENTAL HEALTH?</span>
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              {cards.slice(0, 2).map((card, i) => (
                <div key={i} className="glass-card" style={{
                  padding: '2rem 1.5rem', /* Reduced vertical padding */
                  background: 'white',
                  borderRadius: '2rem', /* Slightly less rounded but more elegant */
                  border: '1px solid rgba(59, 130, 246, 0.08)',
                  boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'rgba(59, 130, 246, 0.08)',
                    borderRadius: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    {card.icon}
                  </div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem', color: '#0f172a', fontFamily: "'Gochi Hand', cursive" }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid-full-width">
              <div className="glass-card" style={{
                padding: '1.5rem 2rem',
                background: 'white',
                borderRadius: '2rem',
                border: '1px solid rgba(59, 130, 246, 0.08)',
                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '2rem',
                alignItems: 'center'
              }}>
                <div style={{
                  flexShrink: 0,
                  width: '60px',
                  height: '60px',
                  background: 'rgba(59, 130, 246, 0.08)',
                  borderRadius: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {cards[2].icon}
                </div>
                <div style={{ flex: '1 1 300px' }}>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0f172a', fontFamily: "'Gochi Hand', cursive" }}>
                    {cards[2].title}
                  </h3>
                  <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                    {cards[2].desc}
                  </p>
                </div>
              </div>
            </div>

            <div style={{
              paddingLeft: '1.5rem',
              borderLeft: '4px solid #cbd5e1',
              marginTop: '4rem'
            }}>
              <p style={{
                margin: 0,
                fontSize: "1.2rem",
                fontStyle: "italic",
                color: "#475569",
                lineHeight: 1.5
              }}>
                "A healthy mind is the foundation of every dream."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
