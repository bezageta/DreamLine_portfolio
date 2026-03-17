import React from 'react';
import { BookOpen, Palette, Terminal } from 'lucide-react';

const ProgramsSection = () => {
    return (
        <section id="academic-programs" className="section-container">
            <div className="text-center">
                <span className="caption">Academics</span>
                <h2>Core Programs</h2>
                <p className="subtitle">Discover our pathways to success from Kindergarten through Grade 8.</p>
            </div>
            <div className="programs-grid">
                <div className="program-card glass-panel animate-up">
                    <Terminal size={48} color="var(--primary-gold)" />
                    <h3>STEM Focus</h3>
                    <p>Coding, robotics, and integrated sciences.</p>
                </div>
                <div className="program-card glass-panel animate-up delay-1">
                    <Palette size={48} color="var(--primary-gold)" />
                    <h3>Creative Arts</h3>
                    <p>Visual, digital, and performing arts integration.</p>
                </div>
                <div className="program-card glass-panel animate-up delay-2">
                    <BookOpen size={48} color="var(--primary-gold)" />
                    <h3>Core Academics</h3>
                    <p>Rigorous math, literature, and humanities.</p>
                </div>
            </div>
        </section>
    );
};
export default ProgramsSection;
