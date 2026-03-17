import React from 'react';
import { Award, Users, BookOpen } from 'lucide-react';

const HeroSection = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <span className="caption animate-up">The School of Excellence</span>
                <h1 className="animate-up delay-1">Unlocking the Future.</h1>
                <p className="animate-up delay-2">An exclusive academic portfolio showcasing the brilliance, innovation, and achievements of our exceptional students from KG1 to Grade 8.</p>

                <div className="hero-stats animate-up delay-2">
                    <div className="hero-stat-item">
                        <Users size={28} color="var(--color-accent-gold)" />
                        <div>
                            <strong>850+</strong>
                            <span>Students</span>
                        </div>
                    </div>
                    <div className="hero-stat-item">
                        <Award size={28} color="var(--color-accent-gold)" />
                        <div>
                            <strong>15+</strong>
                            <span>National Awards</span>
                        </div>
                    </div>
                </div>

                <div className="hero-buttons animate-up delay-3">
                    <a href="#portfolio" className="btn-primary">View Portfolio</a>
                    <a href="#about" className="btn-secondary">Our Story</a>
                </div>
            </div>

            <div className="hero-visuals animate-up delay-2">
                <div className="hero-image-grid">
                    <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800" alt="Campus Building" className="img-main" />
                    <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400" alt="Student project" className="img-sub img-1" />
                    <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=400" alt="Students learning" className="img-sub img-2" />

                    <div className="floating-badge">
                        <BookOpen size={20} color="var(--primary-navy)" />
                        <span>Premium Education</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
