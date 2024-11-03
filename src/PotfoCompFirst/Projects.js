import React, { useState, useRef } from 'react';

export default function Projects() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollContainerRef = useRef(null);
    const projects = ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5'];
    const scrollStep = 180; // Adjust scroll step as needed

    const handleScrollLeft = () => {
        setScrollPosition(prevPosition => Math.min(prevPosition + scrollStep, 0));
    }

    const handleScrollRight = () => {
        const maxScroll = -((projects.length - 1) * scrollStep);
        setScrollPosition(prevPosition => Math.max(prevPosition - scrollStep, maxScroll));
    }

    return (
        <div>
            <div className="project-container" id='project-container-ss'>
                <p>|| Projects</p>
                <h1>My Complete Projects</h1>
                <div className="project-content" id='project-content-ss'>
                    <div className="buttons" id='buttons-ss'>
                        <button onClick={handleScrollLeft} aria-label="Scroll left">
                            <i className="fa-solid fa-angle-left"></i>
                        </button>
                        <button onClick={handleScrollRight} aria-label="Scroll right">
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                    <div className="scroll-project" id='scroll-project-ss' ref={scrollContainerRef}>
                        <ul style={{ transform: `translateX(${scrollPosition}px)`, transition: 'transform 0.3s ease' }}>
                            {projects.map((project, index) => (
                                <li key={index}>
                                  <div className="proj-image">
                                    <img src="https://th.bing.com/th/id/OIP.MUCGlRCgOHwZuQoV4Dk9bwHaFH?rs=1&pid=ImgDetMain" alt="" />
                                  </div>
                                  <div className="proj-disc">
                                    <h2>Fun Zone</h2>
                                    <p>This project is created by using jsx React.js.This task is given from Aptech our theaching center.I completed this project almost 90%.</p>
                                    <button>More</button>
                                  </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
