import React from 'react';
import NavBar from '../components/NavBar';

function DefaultLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}

export default DefaultLayout;
