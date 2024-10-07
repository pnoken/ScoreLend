export const Hero: React.FC = () => {
    return (
        <section className="p-12 hero bg-base-300 info-content">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">

                    <rect width="100%" height="100%" fill="none" />


                    <g transform="translate(100, 100)">
                        <polygon points="50,0 75,25 75,75 50,100 25,75 25,25" fill="#4a90e2" />
                        <polygon points="120,0 145,25 145,75 120,100 95,75 95,25" fill="#50e3c2" />
                        <polygon points="50,100 75,125 75,175 50,200 25,175 25,125" fill="#f5a623" />
                        <polygon points="120,100 145,125 145,175 120,200 95,175 95,125" fill="#9013fe" />
                    </g>


                    <path d="M 50 50 Q 100 150 200 50" stroke="#333" stroke-width="2" fill="none" stroke-dasharray="5,5" />


                    <circle cx="270" cy="50" r="30" fill="#ffd700" />

                </svg>
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-4">Revolutionizing Credit with Blockchain Technology</h1>
                    <p className="text-xl mb-8">Access undercollateralized loans based on your on-chain reputation and Builder Score.</p>
                    <div className="flex justify-center space-x-4">
                        <a href="#get-started" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-600 hover:text-white transition duration-300">Lend Now</a>
                        <a href="#learn-more" className="bg-transparent border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    )
}