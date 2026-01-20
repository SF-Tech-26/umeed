export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="scroll-reveal text-center" style={{ marginBottom: "6rem" }}>
          <h2 style={{ border: "none", fontSize: "4rem", padding: 0 }}>ABOUT UMEED</h2>
          <div style={{ width: "100px", height: "4px", background: "var(--accent-color)", margin: "1.5rem auto" }}></div>
        </div>

        {/* First Detailed Row */}
        <div className="split-layout" style={{ marginBottom: "10rem" }}>
          <div className="scroll-reveal" style={{ position: "relative" }}>
            <div className="glass-card" style={{
              padding: "4px",
              transform: "rotate(-3deg)",
              border: "1px solid rgba(2, 132, 199, 0.2)",
              boxShadow: "0 0 20px rgba(2, 132, 199, 0.2), 0 5px 15px rgba(0,0,0,0.1)"
            }}>
              <div className="polaroid-placeholder" style={{ height: "450px" }}>
                <p>Visual: Support Circle</p>
              </div>
            </div>
            {/* Architectural Accent */}
            <div style={{
              position: "absolute",
              top: "-25px",
              left: "-25px",
              width: "100px",
              height: "100px",
              border: "5px solid var(--accent-color)",
              borderRadius: "24px",
              zIndex: -1,
              opacity: 0.3
            }}></div>
          </div>
          <div className="scroll-reveal stagger-2">
            <h3 style={{ fontSize: "2.5rem", textTransform: "none", fontWeight: 800, marginBottom: "2rem" }}>A Platform to Speak</h3>
            <p style={{ fontSize: "1.2rem", marginBottom: "2.5rem", color: "var(--text-secondary)" }}>
              UMEED is a movement focused on destigmatizing mental health issues and providing a safe,
              anonymous space for dialogue. We believe that awareness is the first step toward collective healing.
            </p>
            <div className="glass-card" style={{ padding: "2.5rem", background: "white", border: "none" }}>
              <p style={{ margin: 0, fontWeight: 700, fontSize: "1.1rem", color: "var(--accent-color)", lineHeight: 1.6 }}>
                "We provide professional support, expert guidance, and creative outlets to ensure
                that no one feels alone in their personal struggles."
              </p>
            </div>
          </div>
        </div>

        {/* Second Detailed Row (Collage Style) */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "4rem",
          alignItems: "center"
        }}>
          <div className="scroll-reveal">
            <h3 style={{ fontSize: "2.5rem", textTransform: "none", fontWeight: 800, marginBottom: "2rem" }}>Healing Together</h3>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "3rem" }}>
              Our initiative bridges the gap between those in need and the professional resources
              available. From 24/7 helplines to on-ground workshops, we leave no stone unturned.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              {["100+ Workshops", "50K+ Targeted", "25+ Expert Partners"].map((item, i) => (
                <div key={i} className="glass-card" style={{ padding: "1.5rem", background: "rgba(2, 132, 199, 0.05)", border: "none", textAlign: "center" }}>
                  <h4 style={{ margin: 0, color: "var(--accent-color)", fontSize: "1.2rem", fontWeight: 900 }}>{item}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="scroll-reveal stagger-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div className="glass-card" style={{
              padding: "4px",
              transform: "translateY(20px)",
              border: "1px solid rgba(2, 132, 199, 0.2)",
              boxShadow: "0 0 15px rgba(2, 132, 199, 0.15)"
            }}>
              <div className="polaroid-placeholder" style={{ height: "250px" }}>Seminar</div>
            </div>
            <div className="glass-card" style={{
              padding: "4px",
              transform: "translateY(-20px)",
              border: "1px solid rgba(2, 132, 199, 0.2)",
              boxShadow: "0 0 15px rgba(2, 132, 199, 0.15)"
            }}>
              <div className="polaroid-placeholder" style={{ height: "250px" }}>Action</div>
            </div>
            <div className="glass-card" style={{
              padding: "4px",
              gridColumn: "span 2",
              border: "1px solid rgba(2, 132, 199, 0.2)",
              boxShadow: "0 0 15px rgba(2, 132, 199, 0.15)"
            }}>
              <div className="polaroid-placeholder" style={{ height: "200px" }}>Community Mural</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
