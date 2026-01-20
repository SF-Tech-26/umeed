import React, { useState, useEffect } from 'react';
import { Heart } from "lucide-react";
import sfHeader from "../assets/sf_header.webp";

export default function Hero() {
  const fullTagline = "Igniting Light in the Shadowed Mind";
  const [taglineText, setTaglineText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let currentIdx = 0;
    const typeInterval = setInterval(() => {
      if (currentIdx <= fullTagline.length) {
        setTaglineText(fullTagline.slice(0, currentIdx));
        currentIdx++;
      } else {
        clearInterval(typeInterval);
        setIsDone(true);
      }
    }, 50); // Faster typing for longer tagline

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section className="section-padding" style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      paddingTop: "20px",
      overflow: "hidden"
    }}>
      <div className="noise-overlay"></div>

      <div className="container text-center" style={{ position: "relative", zIndex: 2 }}>
        {/* Enlarged SF Header Image with more space */}
        <div style={{ marginBottom: "-1.5rem", opacity: 0.9 }}>
          <img src={sfHeader} alt="Spring Fest" style={{ width: "100%", maxWidth: "420px", height: "auto" }} />
        </div>

        {/* Static Title */}
        <h1 style={{
          margin: 0,
          fontSize: "clamp(4.5rem, 20vw, 12rem)",
          lineHeight: 0.9,
          fontFamily: "'Gochi Hand', cursive",
          fontWeight: 400,
          letterSpacing: "0.02em",
          color: "#0f172a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0"
        }}>
          <span style={{ position: "relative" }}>
            UMEED
          </span>
        </h1>

        {/* Tagline on New Line with Highlighter effect */}
        <div style={{
          marginTop: "1.5rem",
          display: "block"
        }}>
          <div className="highlighter-effect" style={{
            fontWeight: 800,
            fontSize: "clamp(1rem, 3vw, 1.4rem)",
            letterSpacing: "0.05em",
            color: "#0f172a",
            position: "relative"
          }}>
            {taglineText}
            {!isDone && (
              <span style={{ borderRight: '3px solid #0f172a', marginLeft: '2px', animation: 'blink 0.7s infinite' }}>&nbsp;</span>
            )}
          </div>
        </div>

        {/* Dynamic Background Mesh */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "120%",
          height: "120%",
          background: "radial-gradient(circle at 50% 50%, rgba(2, 132, 199, 0.1) 0%, transparent 60%)",
          zIndex: -1,
          pointerEvents: "none"
        }}></div>
      </div>

    </section>
  );
}
