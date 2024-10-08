import React from 'react'
import Header from '../components/header/HeadAdmin'
import Nav from '../components/header/NavAdmin'

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
