import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import { useNavigate } from 'react-router-dom'

function Declaration() {

  const navigate = useNavigate()
  return (
    <div>
        <DefaultLayout>
            <div className="p-4">

                <div className="presentation">
                  <div className="container">

                      <div className="image1">
                          <img src="/assets/IMAGE-TESTAMENTOOO-1024x683.png.webp" alt="" />
                      </div>

                      <div className="txt1">
                          <h1 className='text-3xl font-bold mb-3  my-9'>Declarez chez nous votre succession</h1>
                          <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              Aperiam sunt sapiente cumque modi fuga laborum voluptatibus atque similique voluptas 
                              dolor assumenda ratione dolore, quis adipisci illum iure, itaque, consectetur eum.
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              Aperiam sunt sapiente cumque modi fuga laborum voluptatibus atque similique voluptas 
                              dolor assumenda ratione dolore, quis adipisci illum iure, itaque, consectetur eum.
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              Aperiam sunt sapiente cumque modi fuga laborum voluptatibus atque similique voluptas 
                              dolor assumenda ratione dolore, quis adipisci illum iure, itaque, consectetur eum.
                          </p>
                          <button onClick={()=>navigate("/demande-declaration")}>Commencer la déclaration</button>
                      </div>
                  </div>
              </div>
            </div>
        </DefaultLayout>
    </div>
  )
}

export default Declaration