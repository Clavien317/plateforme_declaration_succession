import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


function Inscrire() {
  const router = useNavigate()
  return (
    <>
      <div className="auth">
        <br />
        <form action="">
          <div className="back" onClick={()=>router("/")}>
            <IoMdArrowRoundBack /> 
          </div>
          <br />
          <h1 className="text-2xl font-bold text-center text-blue-600">Inscription  </h1>
          <div className="data">
              <div className="saisir">
                <label htmlFor="">Nom complet <span>*</span></label>
                <br />
                <input type="text" name='' placeholder='Saisissez votre nom complet...' required/>
              </div>

              <div className="saisir">
                <label htmlFor="">Tel <span>*</span></label>
                <br />
                <input type="text" name='' placeholder='Saisissez votre telephone ...' required/>
              </div>

              <div className="saisir">
                <label htmlFor="">Email <span>*</span></label>
                <br />
                <input type="text" name='' placeholder='Saisissez votre Email...' required/>
              </div>

              <div className="saisir">
                <label htmlFor="">Mot de passe <span>*</span></label>
                <br />
                <input type="password" name='' placeholder='Entrer votre mot de passe ***' required/>
              </div>

              <div className="saisir">
                <button>Inscrire</button>
                <div className='google'>
                  <div className="icons"><FcGoogle /></div>
                  <h3 className='mx-3'> Connectez avec compte google</h3>
                </div>
              </div>

              <div className="inscrire">
                <p>Si vous avez un compte, <a href="/login"> Veillez se connecter directement</a></p>
              </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Inscrire
