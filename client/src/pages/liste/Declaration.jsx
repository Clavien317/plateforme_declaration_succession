import React from 'react'
import Mesdeclaration from '../../components/Declaration'
import DefaultLayout from '../../layout/DefaultLayout'

function Declaration() {
  return (
    <div>
        <DefaultLayout>
            <div className="liste-declaration">
                <Mesdeclaration />
            </div>
        </DefaultLayout>
    </div>
  )
}

export default Declaration