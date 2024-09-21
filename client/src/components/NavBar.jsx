import React from 'react';

function NavBar() {
  const token = "dwdfew";
  return (
    <>
      <header className="shadow-lg fixed top-0 w-full z-50 bg-white">
        <div className="logo mx-5 text-3xl font-bold">
          <h1>LOGO</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-200">Accueil</a></li>
              {token.length !== 0? (
                <>
                  {/* <li><a href="/declaration" className="hover:text-gray-200">Declaration</a></li> */}
                  <li><a href="/dashboard" className="hover:text-gray-200">Dashbord</a></li>
                </>
              ):(
              <>
                <li><a href="/login" className="hover:text-gray-200">Se connecter</a></li>
              </>)}
            <li><a href="/assistant" className="hover:text-gray-200">Assistant</a></li>
            <li><a href="/faq" className="hover:text-gray-200">FAQs</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
