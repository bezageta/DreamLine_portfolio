import React from 'react';
import { newsEvents } from '../data/mockData';
import { Calendar, ArrowRight } from 'lucide-react';

const NewsEvents = () => {
    const news = newsEvents.filter(item => item.type === 'news');
    const events = newsEvents.filter(item => item.type === 'event');

    return (
        <section id="news" className="section-container">
            <div className="text-center">
                <span className="caption">Stay Updated</span>
                <h2>News & Upcoming Events</h2>
            </div>

            <div className="news-events-grid">
                {/* News Column */}
                <div className="news-column">
                    <h3 className="column-title">Latest News</h3>
                    <div className="news-list">
                        {news.map(item => (
                            <div key={item.id} className="news-card glass-panel animate-up">
                                <img src={item.image} alt={item.title} className="news-img" />
                                <div className="news-content">
                                    <span className="news-date">{item.date}</span>
                                    <h4>{item.title}</h4>
                                    <p>{item.summary}</p>
                                    <a href="#" className="read-more">Read Full Story <ArrowRight size={16} /></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Events Column */}
                <div className="events-column">
                    <h3 className="column-title">Upcoming Events</h3>
                    <div className="events-list">
                        {events.map(item => (
                            <div key={item.id} className="event-item glass-panel animate-up">
                                <div className="event-date-box">
                                    <Calendar size={24} color="var(--primary-gold)" />
                                    <span>{item.date.split(' ')[0]}</span>
                                    <strong>{item.date.split(' ')[1].replace(',', '')}</strong>
                                </div>
                                <div className="event-details">
                                    <h4>{item.title}</h4>
                                    <p>{item.summary}</p>
                                </div>
                            </div>
                        ))}

                        <div className="glass-cta animate-up delay-1" style={{ padding: '30px', background: 'var(--primary-navy)', color: 'white', borderRadius: '15px' }}>
                            <h3>See Full Calendar</h3>
                            <p>Don't miss out on important dates and student showcases.</p>
                            <button className="btn-primary" style={{ marginTop: '20px' }}>View Calendar</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsEvents;
