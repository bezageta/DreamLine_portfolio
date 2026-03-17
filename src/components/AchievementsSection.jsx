import React from 'react';
import { achievements } from '../data/mockData';
import { Trophy, Star, Medal } from 'lucide-react';

const AchievementsSection = () => {
    const getIcon = (category) => {
        switch (category) {
            case 'Institution': return <Trophy size={24} color="var(--primary-gold)" />;
            case 'Academic': return <Star size={24} color="var(--primary-gold)" />;
            default: return <Medal size={24} color="var(--primary-gold)" />;
        }
    };

    return (
        <section id="achievements" className="section-container bg-light-section">
            <div className="text-center">
                <span className="caption">Highlights</span>
                <h2>School Achievements</h2>
                <p className="subtitle">Celebrating our collective successes and institutional milestones.</p>
            </div>

            <div className="achievements-timeline">
                <div className="timeline-center-line"></div>
                {achievements.map((item, index) => (
                    <div key={item.id} className={`achievement-item ${index % 2 === 0 ? 'left' : 'right'} animate-up delay-${(index % 3) + 1}`}>
                        <div className="achievement-content glass-panel">
                            <div className="ach-icon">{getIcon(item.category)}</div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <span className="ach-category">{item.category}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AchievementsSection;
