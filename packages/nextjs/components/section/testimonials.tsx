import React from 'react';

const testimonials = [
    {
        name: "Alice Johnson",
        role: "Freelancer",
        feedback: "ScoreLend enabled me to access the funds I needed without the hassle of traditional banks. The process was seamless and transparent.",
        avatar: "👩",
    },
    {
        name: "Michael Smith",
        role: "Developer",
        feedback: "The Builder Score system truly reflects my on-chain activities. It’s empowering to have my reputation translate into financial opportunities.",
        avatar: "👨",
    },
    {
        name: "Linda Martinez",
        role: "Entrepreneur",
        feedback: "With ScoreLend, I was able to secure a loan that helped me grow my business. The community-driven approach makes me feel valued and supported.",
        avatar: "👩",
    },
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">You Are in Good Company</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <div className="text-6xl mb-4">{testimonial.avatar}</div>
                            <p className="text-gray-700 mb-4">"{testimonial.feedback}"</p>
                            <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                            <p className="text-gray-500">{testimonial.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;