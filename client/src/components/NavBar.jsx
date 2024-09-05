import React from 'react'

function NavBar() {
  return (
    <>
      <header className='shadow-lg'>
        <div className="logo mx-5 text-3xl font-bold "><h1>LOGO</h1></div>
        <nav>
          <ul>
            <li><a href="/" className="hover:text-gray-200">Accueil</a></li>
            <li><a href="/declaration" className="hover:text-gray-200">Declaration</a></li>
            <li><a href="/assistant" className="hover:text-gray-200">Assistant</a></li>
            <li><a href="/login" className="hover:text-gray-200">Se connecter</a></li>
            <li><a href="/faq" className="hover:text-gray-200">FAQs</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default NavBar