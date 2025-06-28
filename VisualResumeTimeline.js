import React, { useState } from "react";
import "./VisualResumeTimeline.css";

const events = [
  { date: "2018", title: "Graduated", description: "Completed B.Tech in CSE." },
  { date: "2019", title: "Joined XYZ Corp", description: "Software Engineer Role." },
  { date: "2021", title: "Senior Engineer", description: "Led key projects." },
  { date: "2023", title: "Started Freelancing", description: "Global web & mobile projects." },
];

const tools = [
  { name: "JavaScript", icon: "🟨" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟩" },
  { name: "AWS Certified", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
];

const VisualResumeTimeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="timeline-container">
      <h2>My Visual Resume (Timeline)</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div
            className={`timeline-event ${hoveredIndex === index ? "active" : ""}`}
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="timeline-dot" />
            <div className="timeline-date">{event.date}</div>
            <div className="timeline-title">{event.title}</div>
            {hoveredIndex === index && (
              <div className="timeline-description">{event.description}</div>
            )}
          </div>
        ))}
      </div>

      <h2 className="tools-title">My Tools, Certifications & Badges</h2>
      <div className="tools-section">
        {tools.map((tool, index) => (
          <div className="tool-item" key={index} title={tool.name}>
            <span className="tool-icon">{tool.icon}</span>
            <div className="tool-name">{tool.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisualResumeTimeline;

