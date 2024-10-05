export const Mission = () => {
    return (
        <section id="mission" className="p-12 hero info-content">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">The Mission: Access to Credit</h2>
                    <p className="text-xl text-gray-700 mb-6">
                        At ScoreLend, our mission is to democratize access to credit through decentralized finance. We believe in a financial system where trust is built on transparency, on-chain reputation, and community-driven principles.
                    </p>
                    <p className="text-xl text-gray-700">
                        Our vision is to create an inclusive financial ecosystem that empowers individuals globally, especially those underserved by traditional banking systems, by leveraging blockchain technology and innovative credit scoring mechanisms.
                    </p>
                </div>
                <img src="/financial-freedom.svg" className="md:max-w-xl max-w-xs rounded-lg" />
            </div>
        </section>
    )
}