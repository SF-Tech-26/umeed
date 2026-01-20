import React from 'react';
import { MessageSquare, Smile, Footprints, Mail } from 'lucide-react';
import QnA from '../assets/QnA.png';
import sf2 from '../assets/sf2.jpeg';
import sf3 from '../assets/sf3.jpg';
import recreational from '../assets/recreational.png';

export default function Initiatives() {
  return (
    <div id="initiatives">
      {/* Refined Section Header: Cohesive and Artistic */}
      <section className="section-padding" style={{
        background: 'linear-gradient(rgba(186, 230, 253, 0.4), #bae6fd)',
        paddingTop: '8rem',
        paddingBottom: '4rem',
        borderBottom: '1px solid rgba(255,255,255,0.3)',
        position: 'relative'
      }}>
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center' }}>
            <div style={{
              marginTop: '4rem'
            }}></div>
            <h2 style={{
              fontSize: "clamp(3.5rem, 10vw, 7rem)",
              color: "#0f172a",
              border: "none",
              padding: 0,
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1
            }}>
              OUR <span style={{ color: '#0284c7' }}>INITIATIVES</span>
            </h2>
            <div style={{
              width: "120px",
              height: "4px",
              background: "linear-gradient(to right, transparent, #0284c7, transparent)",
              margin: "2rem auto",
              borderRadius: "10px"
            }}></div>
          </div>
        </div>
      </section>

      {/* Mind Matters (Image 2) */}
      <section className="section-padding" style={{
        background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle watercolor-like texture overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          opacity: 0.4,
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/pinstriped-suit.png")', // Using a more subtle, wavy texture
          pointerEvents: 'none'
        }}></div>
        <div className="container">
          <div className="scroll-reveal" style={{ marginBottom: "4rem" }}>
            <h2 style={{
              border: "none",
              padding: 0,
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              lineHeight: 1.1,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#0f172a'
            }}>
              MIND MATTERS: EXPERT TALKS AND Q&A
            </h2>
          </div>
          <div className="split-layout">
            <div className="scroll-reveal" style={{
              transform: 'rotate(-4deg)',
              transformOrigin: 'center',
              padding: '10px'
            }}>
              <div style={{
                borderRadius: '1.5rem',
                overflow: 'hidden',
                boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.25)',
                border: '4px solid white'
              }}>
                <img src={QnA} alt="Expert Talks" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>

            <div className="scroll-reveal stagger-2">
              <h3 style={{
                fontSize: "2.4rem",
                textTransform: "none",
                fontWeight: 800,
                marginBottom: "1rem",
                color: '#1e293b'
              }}>
                Learn from the Experts
              </h3>
              <p style={{
                fontSize: "1.15rem",
                marginBottom: "2rem",
                color: "#475569",
                lineHeight: 1.6,
                fontWeight: 500
              }}>
                Sessions with psychologists, therapists, and motivational speakers
                discussing critical topics that matter to students.
              </p>

              <ul style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
                marginBottom: '2.5rem'
              }}>
                {[
                  "Understanding stress and anxiety",
                  "Building self-esteem and confidence",
                  "Effective coping mechanisms",
                  "When and how to seek help"
                ].map((item, i) => (
                  <li key={i} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    fontWeight: 500,
                    fontSize: '1.1rem',
                    color: '#334155'
                  }}>
                    <div style={{ width: "6px", height: "6px", background: "#64748b", borderRadius: "50%" }}></div>
                    {item}
                  </li>
                ))}
              </ul>

              <div style={{
                padding: "2rem",
                background: "#d1e9f5",
                borderRadius: '1.2rem',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'center',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)'
              }}>
                <div style={{
                  marginTop: '0.2rem',
                  color: '#0369a1'
                }}>
                  <MessageSquare size={24} />
                </div>
                <p style={{
                  margin: 0,
                  fontSize: "1.05rem",
                  color: "#1e293b",
                  fontWeight: 600,
                  lineHeight: 1.6
                }}>
                  <strong>Interactive Q&A sessions</strong> allow participants to ask questions
                  anonymously and receive professional guidance in a safe, supportive environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recreational Wellness */}
      <section className="section-padding" style={{
        background: 'linear-gradient(rgba(186, 230, 253, 0.4), rgba(186, 230, 253, 0.2)), url("https://www.transparenttextures.com/patterns/pinstriped-suit.png")',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div className="split-layout" style={{ gap: '4rem', alignItems: 'center' }}>
            {/* Illustration Column */}
            <div className="scroll-reveal">
              <img src={recreational} alt="Wellness Activities" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>

            {/* Content Column */}
            <div className="scroll-reveal stagger-2">
              <h2 style={{
                border: "none",
                padding: 0,
                fontSize: "clamp(2.5rem, 5vw, 3.2rem)",
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#0f172a',
                marginBottom: '3rem'
              }}>
                FUN ACTIVITIES FOR MENTAL WELLNESS
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem'
              }}>
                {/* Card 1 */}
                <div style={{
                  background: 'white',
                  padding: '2.5rem 1.5rem 1.5rem',
                  borderRadius: '1.2rem',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  position: 'relative',
                  border: '1px solid rgba(0,0,0,0.03)'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-18px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '36px',
                    height: '36px',
                    background: '#e2e8f0',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#64748b'
                  }}>
                    <Smile size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1e293b', marginBottom: '1rem', textTransform: 'uppercase' }}>
                    STRESS BUSTER ZONE
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                    Games, laughtertherapy, bubble stations, and activities like "smash the stress" where participants break paper cups with negative words written on them to unwind and release tension.
                  </p>
                </div>

                {/* Card 2 */}
                <div style={{
                  background: 'white',
                  padding: '2.5rem 1.5rem 1.5rem',
                  borderRadius: '1.2rem',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  position: 'relative',
                  border: '1px solid rgba(0,0,0,0.03)'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-18px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '36px',
                    height: '36px',
                    background: '#e2e8f0',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#64748b'
                  }}>
                    <Footprints size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1e293b', marginBottom: '1rem', textTransform: 'uppercase' }}>
                    "WALK FOR WELLNESS" RALLY
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                    A short symbolic campus walk promoting mental health awareness and breaking stigma, with slogans, placards, and music creating a powerful message of solidarity.
                  </p>
                </div>

                {/* Card 3 - Full Width */}
                <div className="grid-full-width" style={{
                  background: 'white',
                  padding: '2rem 1.5rem 1.5rem',
                  borderRadius: '1.2rem',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  position: 'relative',
                  border: '1px solid rgba(0,0,0,0.03)'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-18px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '36px',
                    height: '36px',
                    background: '#e2e8f0',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#64748b'
                  }}>
                    <Mail size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1e293b', marginBottom: '1rem', textTransform: 'uppercase' }}>
                    ANONYMOUS LETTERS BOOTH
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                    "Dear Stranger..." Participants write kind notes or share their feelings anonymously, later displayed or exchanged to spread positivity and connection throughout the community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Building a Culture of Care */}
      <section className="section-padding" style={{
        background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Watercolor texture overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          opacity: 0.4,
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/pinstriped-suit.png")',
          pointerEvents: 'none'
        }}></div>

        <div className="container">
          <div className="scroll-reveal" style={{ marginBottom: "5rem" }}>
            <h2 style={{
              border: "none",
              padding: 0,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.1,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#0f172a'
            }}>
              BUILDING A CULTURE OF CARE
            </h2>
          </div>

          <div className="split-layout" style={{ gap: '6rem', alignItems: 'start' }}>
            {/* Stats Column */}
            <div className="scroll-reveal" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '3rem 2rem'
            }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '4.5rem', fontWeight: 900, color: '#0369a1', lineHeight: 1, display: 'block', marginBottom: '0.5rem' }}>1 in 4</span>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1e293b', marginBottom: '1rem' }}>Students Affected</h4>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>Experience mental health challenges during their academic journey</p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '4.5rem', fontWeight: 900, color: '#0369a1', lineHeight: 1, display: 'block', marginBottom: '0.5rem' }}>75%</span>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1e293b', marginBottom: '1rem' }}>Don't Seek Help</h4>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>Due to stigma and lack of awareness about available resources</p>
              </div>

              <div className="grid-full-width" style={{ textAlign: 'center', marginTop: '2rem' }}>
                <span style={{ fontSize: 'clamp(3.5rem, 10vw, 5rem)', fontWeight: 900, color: '#0284c7', lineHeight: 1, display: 'block', marginBottom: '0.5rem' }}>100%</span>
                <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1e293b', marginBottom: '1rem' }}>Can make a difference</h4>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.5, margin: '0 auto', maxWidth: '500px' }}>Every conversation, every event, every act of kindness matters</p>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="scroll-reveal stagger-2" style={{ background: 'rgba(255,255,255,0.3)', padding: '3rem', borderRadius: '2rem', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.5)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#1e293b', marginBottom: '2rem', textTransform: 'uppercase' }}>
                TOGETHER WE CAN CHANGE THIS
              </h3>
              <p style={{ fontSize: '1.2rem', color: '#334155', lineHeight: 1.8, fontWeight: 500, margin: 0 }}>
                Mental health is not a weakness; it's a fundamental part of being human.
                By creating spaces for open dialogue, providing access to support, and
                building a community of care, we can transform campus culture.
                <br /><br />
                UMEED represents more than hope; it represents action, compassion,
                and the collective power of a community committed to supporting one another.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
