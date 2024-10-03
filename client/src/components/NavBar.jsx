import React from 'react';

function NavBar() {
  const token = localStorage.getItem("token-succession-user");
  return (
    <>
      <header className="shadow-lg fixed top-0 w-full z-50 bg-white">
        <div className="logo mx-5 text-3xl font-bold">
          <img src="/assets/1K6tJ435_400x400.png" alt="" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-200">Accueil</a></li>
            {token && token.length > 0 ? (
              <>
                <li><a href="/dashboard" className="hover:text-gray-200">Dashboard</a></li>
              </>
            ) : (
              <>
                <li><a href="/login" className="hover:text-gray-200">Se connecter</a></li>
              </>
            )}
            <li><a href="/assistant" className="hover:text-gray-200">Assistant</a></li>
            <li><a href="/faq" className="hover:text-gray-200">FAQs</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
