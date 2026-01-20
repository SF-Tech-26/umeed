export default function Footer() {
  return (
    <footer id="footer">
      {/* Get Involved Section */}
      <section id="get-involved" className="section-padding" style={{ background: "white", scrollMarginTop: "100px" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "4rem",
            alignItems: "start"
          }}>
            <div className="scroll-reveal text-center">
              <div className="animate-float" style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                maxWidth: "300px",
                aspectRatio: "1/1",
                background: "var(--accent-color)",
                borderRadius: "60px",
                transform: "rotate(-6deg)",
                boxShadow: "0 40px 80px -20px rgba(2, 132, 199, 0.3)"
              }}>
                <svg width="150" height="150" viewBox="0 0 24 24" fill="white">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>

            <div className="scroll-reveal">
              <h3 style={{ fontSize: "3rem", textTransform: "none", fontWeight: 800, marginBottom: "2.5rem" }}>Get Involved</h3>
              <p style={{ fontSize: "1.3rem", marginBottom: "3rem", color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: "600px" }}>
                Our work is fueled by the passion of volunteers and the support of our partners.
                Explore how you can contribute to the movement.
              </p>

              <div className="grid-full-width" style={{
                background: 'white',
                padding: 'min(3rem, 5vw)',
                border: '1px solid #f1f5f9',
                background: '#f8fafc',
                borderRadius: '2rem',
                overflow: 'hidden'
              }}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "3rem"
                }}>
                  <div style={{ wordBreak: 'break-word' }}>
                    <span style={{ fontWeight: 800, color: "var(--accent-color)", letterSpacing: "0.1em", fontSize: "0.8rem" }}>ROHIT KUMAR SAHOO</span>
                    <p style={{ margin: "0.5rem 0 0 0", fontSize: "1.4rem", fontWeight: 900 }}>9849015612</p>
                  </div>
                  <div style={{ wordBreak: 'break-word' }}>
                    <span style={{ fontWeight: 800, color: "var(--accent-color)", letterSpacing: "0.1em", fontSize: "0.8rem" }}>ANURADHA SINGH</span>
                    <p style={{ margin: "0.5rem 0 0 0", fontSize: "1.4rem", fontWeight: 900 }}>8958578751</p>
                  </div>
                  <div className="grid-full-width" style={{ marginTop: "1rem", wordBreak: 'break-all' }}>
                    <p style={{ margin: "0 0 0.8rem 0", fontSize: "0.9rem", opacity: 0.6, fontWeight: 700 }}>VISIT OUR SOCIAL PLATFORM</p>
                    <a href="https://social.springfest.in" target="_blank" rel="noreferrer" style={{
                      fontSize: "clamp(0.9rem, 4.5vw, 2.5rem)",
                      fontWeight: 900,
                      color: "#0f172a",
                      textDecoration: "none",
                      borderBottom: "6px solid #fbbf24",
                      display: 'inline-block',
                      whiteSpace: 'nowrap'
                    }}>
                      social.springfest.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{
            marginTop: "10rem",
            textAlign: "center",
            color: "#94a3b8",
            fontSize: "0.9rem",
            fontWeight: 800,
            letterSpacing: "0.25em",
            textTransform: "uppercase"
          }}>
            SPRING FEST IIT KHARAGPUR © 2025
          </div>
        </div>
      </section>
    </footer>
  );
}
