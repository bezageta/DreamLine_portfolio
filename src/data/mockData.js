export const students = [
    {
        id: 1,
        name: 'Aisha Tarek',
        grade: 'Grade 8',
        bio: 'Passionate about robotics and environmental science. Seeking to build sustainable tech solutions.',
        skills: ['Robotics', 'Python', 'Public Speaking'],
        achievements: ['1st Place National Science Fair 2025', 'Debate Team Captain'],
        projects: [
            {
                title: 'Eco-Bot Prototype',
                description: 'An autonomous robot designed to collect and sort recyclable materials in the school yard.',
                category: 'STEM',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' // Placeholder
            }
        ],
        avatar: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: 2,
        name: 'Omar Hassan',
        grade: 'Grade 7',
        bio: 'Avid writer and digital artist. I love telling stories through interactive media.',
        skills: ['Creative Writing', 'Digital Illustration', 'UI/UX Basics'],
        achievements: ['Published in Youth Anthology', 'Art Exhibition Winner'],
        projects: [
            {
                title: 'The Lost Kingdom',
                description: 'An interactive digital storybook featuring custom illustrations and branching narratives.',
                category: 'Arts',
                image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800'
            }
        ],
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: 3,
        name: 'Lina Youssef',
        grade: 'Grade 8',
        bio: 'Future architect. Fascinated by sustainable building designs and 3D modeling.',
        skills: ['3D Modeling (Blender)', 'Geometry', 'Team Leadership'],
        achievements: ['Math Olympiad Silver Medalist', 'Student Council VP'],
        projects: [
            {
                title: 'Green School Design',
                description: 'A 3D architectural model of a zero-emission school campus.',
                category: 'Design',
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
            }
        ],
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400'
    }
];

export const staff = [
    {
        id: 1,
        name: 'Dr. Sarah Collins',
        role: 'Principal',
        bio: 'Over 20 years of experience in international education. Dedicated to fostering a culture of excellence and well-being.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: 2,
        name: 'Mr. David Chen',
        role: 'Head of STEM',
        bio: 'Former software engineer turned educator. Passionate about bringing real-world tech into the classroom.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: 3,
        name: 'Ms. Elena Rodriguez',
        role: 'Lead English Teacher',
        bio: 'Believes in the power of literature to build empathy. Organizes the annual school poetry slam.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
    }
];

export const newsEvents = [
    {
        id: 1,
        type: 'news',
        title: 'Dreamline Robotics Team Advances to Nationals',
        date: 'March 15, 2026',
        summary: 'Our Grade 8 robotics team, led by Aisha Tarek, has secured a spot in the upcoming national championship.',
        image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 2,
        type: 'event',
        title: 'Annual Spring Arts Festival',
        date: 'April 10, 2026',
        summary: 'Join us for an evening of student artwork, live music performances, and interactive digital media showcases.',
        image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 3,
        type: 'news',
        title: 'New Eco-Garden Inaugurated',
        date: 'March 5, 2026',
        summary: 'Students and staff celebrated the opening of our new sustainable campus garden, completely managed by the Green Club.',
        image: 'https://images.unsplash.com/photo-1585320806055-64bc6b940989?auto=format&fit=crop&q=80&w=800'
    }
];

export const achievements = [
    { id: 1, title: 'Top 10 International Schools 2025', category: 'Institution' },
    { id: 2, title: 'Gold Seal for STEM Excellence', category: 'Academic' },
    { id: 3, title: 'State Debate Champions', category: 'Student Co-curricular' },
    { id: 4, title: '100% High School Placement Rate', category: 'Academic' }
];

export const galleryCategories = ['All', 'Events', 'Campus', 'Sports', 'Classroom'];

export const galleryMedia = [
    { id: 1, url: '/dreamline_modern_building.png', category: 'Campus', alt: 'School Building' },
    { id: 2, url: '/dreamline_classroom.png', category: 'Classroom', alt: 'Modern Classroom' },
    { id: 3, url: '/dreamline_library.png', category: 'Campus', alt: 'Library' },
    // Adding some realistic high-quality unsplash placeholders for variety until more are generated
    { id: 4, url: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&q=80&w=800', category: 'Events', alt: 'Student Presentation' },
    { id: 5, url: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&q=80&w=800', category: 'Sports', alt: 'Basketball Game' },
    { id: 6, url: 'https://images.unsplash.com/photo-1427504494785-319ce51d1541?auto=format&fit=crop&q=80&w=800', category: 'Classroom', alt: 'Science Lab' }
];
