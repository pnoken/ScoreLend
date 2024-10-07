const features = [
    {
        title: "Decentralized Identity",
        description: "Secure and verifiable user identities through basenames.",
        icon: "👤",
    },
    {
        title: "Builder Score",
        description: "Dynamic credit scoring based on on-chain activities and reputation.",
        icon: "📊",
    },
    {
        title: "Undercollateralized Loans",
        description: "Access loans with minimal collateral based on your Builder Score.",
        icon: "💰",
    },
    {
        title: "Smart Contract Automation",
        description: "Transparent and secure loan management through self-executing smart contracts.",
        icon: "🤖",
    },
    {
        title: "Reputation Management",
        description: "Boost your Builder Score with timely repayments and responsible financial behavior.",
        icon: "⭐",
    },
    {
        title: "Liquidity Pool & Incentives",
        description: "Earn yields by providing liquidity to our sustainable credit ecosystem.",
        icon: "🏦",
    },
];

const Features: React.FC = () => {
    return (
        <section id="features" className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">Key Features</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white text-gray-800 p-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;