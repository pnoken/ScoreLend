import { SwitchTheme } from "~~/components/SwitchTheme";
import React from 'react';

const LandingNav: React.FC = () => {
    return (
        <nav className="navbar bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="navbar-start">
                    <a className="text-2xl font-bold">Scorelend</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-4">
                        <li><a className="hover:text-gray-200 transition duration-300" href="#how-it-works">How it works</a></li>
                        <li><a className="hover:text-gray-200 transition duration-300" href="#mission">Mission</a></li>
                        <li><a className="hover:text-gray-200 transition duration-300" href="#faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex items-center space-x-4">
                    <SwitchTheme className="pointer-events-auto" />
                    <a className="btn bg-white text-blue-600 hover:bg-gray-200 transition duration-300" href="/earn" target="_blank">Launch App</a>
                </div>
            </div>
        </nav>
    );
};

export default LandingNav;