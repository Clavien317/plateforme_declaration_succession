import React from 'react';

function NavBar() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4  w-[90%]">
        <div className="text-2xl font-bold">
          <h1>#Succession</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-gray-200">Accueil</a></li>
            <li><a href="/declaration" className="hover:text-gray-200">Faire une déclaration</a></li>
            <li><a href="/assistant" className="hover:text-gray-200">Assistant</a></li>
            <li><a href="" className="hover:text-gray-200">Contact</a></li>
            <li><a href="" className="hover:text-gray-200">FAQ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
