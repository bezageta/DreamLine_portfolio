import React from 'react';
import { staff } from '../data/mockData';

const StaffShowcase = () => {
    return (
        <section id="staff" className="section-container">
            <div className="text-center">
                <span className="caption">Our Leaders</span>
                <h2>Distinguished Staff</h2>
            </div>

            <div className="staff-grid animate-up delay-1">
                {staff.map((member) => (
                    <div key={member.id} className="staff-card glass-panel">
                        <div className="staff-img-wrapper">
                            <img src={member.image} alt={member.name} className="staff-img" />
                            <div className="staff-overlay">
                                <p>{member.bio}</p>
                            </div>
                        </div>
                        <div className="staff-info">
                            <h3>{member.name}</h3>
                            <span className="staff-role">{member.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StaffShowcase;
