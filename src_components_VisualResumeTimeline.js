import React, { useState } from "react";
import "./VisualResumeTimeline.css";

const events = [
  {
    date: "2018",
    title: "Graduated from University",
    description: "Completed B.Tech in Computer Science at ABC University.",
  },
  {
    date: "2019",
    title: "Joined XYZ Corp",
    description: "Worked as a Software Engineer in frontend development.",
  },
  {
    date: "2021",
    title: "Promoted to Senior Engineer",
    description: "Led a team of 5 to deliver critical projects.",
  },
  {
    date: "2023",
    title: "Started Freelancing",
    description: "Worked on multiple web and mobile projects for global clients.",
  },
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
    </div>
  );
};

export default VisualResumeTimeline;