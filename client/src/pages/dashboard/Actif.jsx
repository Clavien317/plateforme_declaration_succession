import React from 'react'
import AdminLayout from '../../layout/ProfilLayout'
import ListeActif from "../../components/admin/ListeActif"

function Actif() {
  return (
    <div>
        <AdminLayout>
            <ListeActif />
        </AdminLayout>
    </div>
  )
}

export default Actif