import React from 'react'
import AdminLayout from '../../layout/AdminLayout'
import User from '../../components/admin/liste/User'

function ListeUser() {
  return (
    <div>
        <AdminLayout>
            <User />
        </AdminLayout>
    </div>
  )
}

export default ListeUser