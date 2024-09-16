import React from 'react'
import Header from '../components/header/Header'
import Nav from '../components/header/Nav'

function AdminLayout({ children }) {
  return (
    <div>
      <Header />
      <Nav />
      <main className='admin-pages'>
        {children}
      </main>
    </div>
  )
}

export default AdminLayout
