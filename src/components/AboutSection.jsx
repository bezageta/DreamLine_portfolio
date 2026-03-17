import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="section-container">
            <div className="about-grid">
                <div className="about-text animate-up">
                    <span className="caption">About Dreamline</span>
                    <h2>Nurturing the Innovators of Tomorrow</h2>
                    <p className="subtitle" style={{ marginBottom: '30px', margin: 0 }}>
                        Dreamline International School is a premier institution dedicated to academic excellence from KG1 to Grade 8. We blend rigorous academics with creative exploration to build a robust portfolio for every student.
                    </p>

                    <div className="core-values">
                        <span className="value-tag">Integrity</span>
                        <span className="value-tag">Innovation</span>
                        <span className="value-tag">Inclusivity</span>
                    </div>
                </div>

                <div className="principal-message glass-panel animate-up delay-1">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Principal" className="principal-img" />
                    <div>
                        <h4>Principal's Welcome</h4>
                        <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>"Our goal is to create a portfolio of success for every child, ensuring they are prepared for the challenges of tomorrow."</p>
                        <strong>- Dr. Sarah Collins</strong>
                    </div>
                </div>
            </div>

            <div className="overview-stats animate-up delay-2" style={{ marginTop: '40px' }}>
                <div className="stat-box"><h2>850+</h2><p>Students</p></div>
                <div className="stat-box"><h2>65+</h2><p>Expert Staff</p></div>
                <div className="stat-box"><h2>15+</h2><p>National Awards</p></div>
                <div className="stat-box"><h2>100%</h2><p>Tech Integration</p></div>
            </div>
        </section>
    );
};

export default AboutSection;
