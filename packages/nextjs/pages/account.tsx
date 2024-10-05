import { useAccount } from "wagmi";
import { Header } from "~~/components/Header";
import { MetaHeader } from "~~/components/MetaHeader";
import { Balance } from "~~/components/scaffold-eth";

const AccountPage: React.FC = () => {
    const { address, isConnected } = useAccount();

    return (
        <>
            <Header />
            <MetaHeader />
            <div className="flex flex-col items-center min-h-screen bg-gray-50 p-4">
                <h1 className="text-4xl font-bold mb-6">Account Overview</h1>
                {isConnected ? (
                    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
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