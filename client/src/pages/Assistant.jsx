import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import Assistants from '../components/Assistant'

function Assistant() {
  return (
    <div>
        <DefaultLayout>
            <div className="p-4">
                <h1 className='text-2xl font-bold text-black text-start my-6'>Voici etape par etape a suivre pour la declaration</h1>
                <hr className='w-60 h-1 bg-black' />
            </div>

            <Assistants />
        </DefaultLayout>
    </div>
  )
}

export default Assistant