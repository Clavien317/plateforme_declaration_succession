import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import Presentation from '../components/Presentation'

function Accueil() {
  return (
    <div>
        <DefaultLayout>
            {/* <div className="p-4">
                <h2 className="text-3xl text-center font-semibold">Bienvenue sur la page d'accueil</h2>
            </div> */}

            <Presentation />
        </DefaultLayout>
    </div>
  )
}

export default Accueil