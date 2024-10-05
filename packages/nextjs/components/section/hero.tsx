export const Hero: React.FC = () => {
    return (
        <section className="p-12 hero bg-base-300 info-content">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/rewards.svg" className="md:max-w-xl max-w-xs rounded-lg" />
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