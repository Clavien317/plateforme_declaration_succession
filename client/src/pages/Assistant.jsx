import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import Assistants from '../components/Assistant'

function Assistant() {
  return (
    <div>
        <DefaultLayout>
            <div className="p-4">
                {/* <h1 className='text-3xl text-black font-semibold text-center'>Assistant professionnel</h1> */}
            </div>

            <Assistants />
        </DefaultLayout>
    </div>
  )
}

export default Assistant