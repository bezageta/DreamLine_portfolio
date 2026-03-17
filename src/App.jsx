import React, { useState, useEffect } from 'react'
import { GraduationCap, Phone, Mail, MapPin, Menu, X } from 'lucide-react'

// Import Components
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import AchievementsSection from './components/AchievementsSection'
import ProgramsSection from './components/ProgramsSection'
import StudentPortfolio from './components/StudentPortfolio'
import StaffShowcase from './components/StaffShowcase'
import NewsEvents from './components/NewsEvents'

const App = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="app-wrapper">
            {/* Navigation */}
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="nav-content">
                    <div className="logo">
                        <GraduationCap size={32} className="logo-icon" />
                        <span>DREAMLINE</span>
                    </div>

                    <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#portfolio">Our Work</a>
                        <a href="#news">News</a>
                        <a href="#admissions" className="cta-btn">Admissions</a>
                    </div>

                    <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </div>
                </div>
            </nav>

            {/* Main Sections */}
            <main>
                <HeroSection />
                <AboutSection />
                <AchievementsSection />
                <ProgramsSection />
                <StudentPortfolio />
                <StaffShowcase />
                <NewsEvents />
            </main>

            {/* Admissions Section (Simplified for Portfolio) */}
            <section id="admissions" className="section-container bg-light-section">
                <div className="admissions-content glass-panel animate-up">
                    <div className="text-center">
                        <span className="caption">Join Us</span>
                        <h2>Become part of Dreamline</h2>
                        <p>Our portfolio speaks for itself. Start your child's journey today.</p>
                    </div>
                    <div className="contact-actions" style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
                        <button className="btn-primary">Apply Now</button>
                        <button className="btn-secondary" style={{ color: 'var(--primary-navy)', borderColor: 'var(--primary-navy)' }}>Contact Us</button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <div className="footer-grid">
                    <div className="footer-col">
                        <div className="logo"><GraduationCap size={24} /> <span>DREAMLINE</span></div>
                        <p>A portfolio of excellence and innovation.</p>
                    </div>
                    <div className="footer-col">
                        <h4>Explore</h4>
                        <ul><li>Student Work</li><li>Staff Profiles</li><li>School Achievements</li><li>Admissions</li></ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contact Us</h4>
                        <ul>
                            <li><Mail size={16} /> admissions@dreamline.edu</li>
                            <li><Phone size={16} /> +1 (234) 567-890</li>
                            <li><MapPin size={16} /> 123 Education St, Innovation City</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Dreamline International School. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default App
