import React, { useState } from 'react';
import { galleryCategories, galleryMedia } from '../data/mockData';

const GallerySection = () => {
    const [filter, setFilter] = useState('All');

    const filteredMedia = filter === 'All'
        ? galleryMedia
        : galleryMedia.filter(item => item.category === filter);

    return (
        <section id="gallery" className="bg-light-section">
            <div className="section-container">
                <div className="text-center">
                    <span className="caption">Visual Portfolio</span>
                    <h2>Campus Life Gallery</h2>
                </div>

                <div className="portfolio-filters">
                    {galleryCategories.map((cat, idx) => (
                        <button
                            key={idx}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="gallery-masonry">
                    {filteredMedia.map((item, index) => (
                        <div key={item.id} className={`gallery-item ${index === 0 ? 'large' : ''} animate-up`}>
                            <img src={item.url} alt={item.alt} />
                            <div className="gallery-overlay">
                                <h4>{item.category}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
