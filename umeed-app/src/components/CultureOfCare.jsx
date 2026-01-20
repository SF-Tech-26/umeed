export default function CultureOfCare() {
    return (
        <section className="section-padding">
            <div className="container">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
                    <div className="scroll-reveal">
                        <h2 style={{ border: "none", padding: 0, fontSize: "3.5rem", lineHeight: 1.1, marginBottom: "3rem" }}>
                            CULTIVATING A <br />CULTURE OF CARE
                        </h2>
                        <p style={{ fontSize: "1.1rem", marginBottom: "2rem", color: "var(--text-secondary)" }}>
                            We are working to create a environment where mental health is a priority, and where
                            empathy is the foundation of every interaction. Our programs are designed to
                            reach people where they are, providing the tools and support they need to thrive.
                        </p>
                        <div className="glass-card" style={{ padding: "2rem", border: "none", background: "white" }}>
                            <h4 style={{ color: "var(--accent-color)", fontWeight: 800, marginBottom: "1rem" }}>OUR MISSION</h4>
                            <p style={{ margin: 0, fontWeight: 600 }}>
                                To bridge the gap between struggling individuals and professional help, while
                                building a resilient community that supports each other through every challenge.
                            </p>
                        </div>
                    </div>

                    <div className="scroll-reveal stagger-2">
                        <div className="glass-card" style={{ padding: "15px" }}>
                            <div className="polaroid-placeholder" style={{ height: "550px" }}>
                                Visual: Community Support Session
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
