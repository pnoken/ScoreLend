import { useAccount } from "wagmi";
import { Header } from "~~/components/Header";
import { MetaHeader } from "~~/components/MetaHeader";
import { Balance } from "~~/components/scaffold-eth";
import TransgateConnect from "@zkpass/transgate-js-sdk"

const AccountPage: React.FC = () => {
    const { address, isConnected } = useAccount();

    const credentials = [
        { name: "Coinbase KYC", verified: false },
        { name: "Email Verification", verified: false },
        { name: "Phone Number Verification", verified: true },
        { name: "Identity Verification", verified: false },
    ];

    const verify = async () => {
        try {
            // The appid of the project created in dev center
            const appid = "a35d4626-dab2-44bf-b9f1-96d68d50e522"

            // Create the connector instance
            const connector = new TransgateConnect(appid)

            // Check if the TransGate extension is installed
            // If it returns false, please prompt to install it from chrome web store
            const isAvailable = await connector.isTransgateAvailable()

            if (isAvailable) {
                // The schema id of the project
                const schemaId = "e942aa110962448b8fa432953a8ec307"

                // Launch the process of verification
                // This method can be invoked in a loop when dealing with multiple schemas
                const res = await connector.launch(schemaId);
                console.log("res", res);

                // verifiy the res onchain/offchain based on the requirement     

            } else {
                console.log('Please install TransGate')
            }
        } catch (error) {
            console.log('transgate error', error)
        }
    }

    return (
        <>
            <Header />
            <MetaHeader />
            <div className="flex flex-col items-center min-h-screen bg-gray-50 p-4">
                <h1 className="text-4xl font-bold mb-6">Account Overview</h1>
                {isConnected ? (
                    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl">
                        <h2 className="text-2xl font-semibold mb-4">Connected Wallet</h2>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-lg">Address:</span>
                            <span className="font-mono text-lg">{address}</span>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-lg">Balance:</span>
                            <Balance address={address} className="font-mono text-lg" />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-lg">Network:</span>
                            <span className="font-mono text-lg">Ethereum</span>
                        </div>
                        {/* New section for credentials verification */}
                        <h3 className="text-xl font-semibold mt-6">Verification Credentials</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {credentials.map((credential, index) => (
                                <div key={index} className={`bg-white shadow-md rounded-lg p-4 ${credential.verified ? "border-green-500 border-2" : "border-red-500 border-2"}`}>
                                    <h4 className="text-lg font-semibold">{credential.name}</h4>
                                    <p className={`text-sm ${credential.verified ? "text-green-600" : "text-red-600"}`}>
                                        {credential.verified ? "Verified" : "Not Verified"}
                                    </p>
                                    {!credential.verified && (
                                        <button onClick={verify} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                            Verify Now
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-2xl font-semibold mb-4">Wallet Not Connected</h2>
                        <p className="text-gray-600">Please connect your wallet to view account details.</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default AccountPage;