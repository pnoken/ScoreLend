import Link from "next/link";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

/**
 * Site header
 */
export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 navbar bg-gradient-to-r from-blue-500 to-purple-600 min-h-16 flex-shrink-0 justify-between z-20 shadow-lg px-4 sm:px-6">
      <div className="navbar-start flex items-center">
        <Link href="/" passHref className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">ScoreLend</span>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4">
          <li>
            <Link href="/earn" passHref>
              <span className="text-white hover:text-gray-200 transition duration-300">Deals</span>
            </Link>
          </li>
          <li>
            <Link href="/account" passHref>
              <span className="text-white hover:text-gray-200 transition duration-300">Manage</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center">
        <RainbowKitCustomConnectButton />
      </div>
    </header>
  );
};