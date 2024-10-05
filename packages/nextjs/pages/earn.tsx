import type { NextPage } from "next";
import { Header } from "~~/components/Header";
import { MetaHeader } from "~~/components/MetaHeader";
import { StakeContractInteraction } from "~~/components/stake";
import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";
import { useAccount } from "wagmi";
import Link from 'next/link';

const StakerUI: NextPage = () => {
  const { data: StakerContract } = useDeployedContractInfo("Staker");
  const { address, isConnected } = useAccount();

  return (
    <>
      <Header />
      <MetaHeader />
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="hidden md:block w-1/4 bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Base</h3>
          <nav className="flex flex-col gap-2">
            <a className="bg-gray-200 rounded-lg p-3 hover:bg-gray-300 transition duration-200" href="#staking">Staking</a>
            <a className="bg-gray-200 rounded-lg p-3 hover:bg-gray-300 transition duration-200" href="#swap">Swap</a>
            <a className="bg-gray-200 rounded-lg p-3 hover:bg-gray-300 transition duration-200" href="#borrow">Borrow</a>
            <a className="bg-gray-200 rounded-lg p-3 hover:bg-gray-300 transition duration-200" href="#gas-request">Gas Request</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="md:w-3/4 w-full bg-gray-100 p-4">
          <div className="flex flex-col w-full border-opacity-50">
            {isConnected && (<div className="grid card bg-white rounded-lg p-4 mt-4 shadow-md">

              <div className="flex justify-between">
                <div className="w-5/6">
                  <h3 className="font-semibold">Set up your UID to start</h3>
                  <p>Unique Identity (UID) is a non-transferrable NFT representing KYC-verification on-chain. A UID is required to participate in the ScoreLend lending protocol. No personal information is stored on-chain.</p>
                </div>

                <Link href="/account">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Go to My Account
                  </button>
                </Link>
              </div>
            </div>)}

            <div className="grid card bg-white rounded-lg p-4 mt-4 shadow-md">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col items-center">
                  <h4 className="text-lg font-semibold">Active Loans</h4>
                  <span className="text-2xl font-bold">$64.62M</span>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="text-lg font-semibold">Total Loss Rate</h4>
                  <span className="text-2xl font-bold">11.03%</span>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="text-lg font-semibold">Total Loans Repaid</h4>
                  <span className="text-2xl font-bold">$57.71M</span>
                </div>
              </div>

            </div>
          </div>
          <StakeContractInteraction key={StakerContract?.address} address={StakerContract?.address} />
          {/* <Stakings /> */}
        </main>
      </div>
    </>
  );
};

export default StakerUI;