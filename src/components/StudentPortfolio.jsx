import React, { useState } from 'react';
import { students } from '../data/mockData';

const StudentPortfolio = () => {
    const [filter, setFilter] = useState('All');

    // Extract unique categories from all student projects
    const categories = ['All', ...new Set(students.flatMap(s => s.projects.map(p => p.category)))];

    const filteredStudents = filter === 'All'
        ? students
        : students.filter(s => s.projects.some(p => p.category === filter));

    return (
        <section id="portfolio" className="bg-light-section">
            <div className="section-container">

                <div className="text-center">
                    <span className="caption">Excellence Displayed</span>
                    <h2>Student Portfolios</h2>
                    <p className="subtitle">Explore the incredible projects and achievements of our student body.</p>
                </div>

                <div className="portfolio-filters animate-up">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="portfolio-grid">
                    {filteredStudents.map((student, idx) => (
                        <div key={student.id} className={`portfolio-card glass-panel animate-up delay-${(idx % 3) + 1}`}>

                            <div className="student-profile-header">
                                <img src={student.avatar} alt={student.name} className="student-avatar" />
                                <div>
                                    <h3>{student.name}</h3>
                                    <span className="grade-badge">{student.grade}</span>
                                </div>
                            </div>

                            <p className="student-bio">"{student.bio}"</p>

                            {/* Show only the featured (first) project for a cleaner grid */}
                            {student.projects.slice(0, 1).map((proj, i) => (
                                <div key={i} className="project-showcase">
                                    <img src={proj.image} alt={proj.title} className="project-thumbnail" />
                                    <div className="project-info">
                                        <span className="tag-category">{proj.category}</span>
                                        <h4>{proj.title}</h4>
                                        <p>{proj.description}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="student-footer">
                                <div className="skills-list">
                                    {student.skills.slice(0, 3).map((skill, i) => (
                                        <span key={i} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudentPortfolio;
