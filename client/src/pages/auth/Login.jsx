import { useNavigate } from 'react-router-dom';
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { IoMdArrowRoundBack } from "react-icons/io";


function Login() {
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
          <h1 className="text-3xl font-bold text-center mb-4 my-4 text-blue-600">Bienvenue  </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="data">
              <div className="saisir">
                <label htmlFor="">Email</label>
                <br />
                <input type="text" name='' placeholder='Saisissez votre Email...'required />
              </div>

              <div className="saisir">
                <label htmlFor="">Mot de passe</label>
                <br />
                <input type="password" name='' placeholder='Entrer votre mot de passe ***'required/>
              </div>

              <div className="forget">
                <a href="">Mot de passe oublié</a>
              </div>

              <div className="saisir">
                <button>Connexion</button>
                <div className='google'>
                  <div className="icons"><FcGoogle /></div>
                  <h3 className='mx-3'> Connectez avec compte google</h3>
                </div>
              </div>

              <div className="inscrire">
                <p>Si vous n'avez pas encore un compte, <a href="/register"> Veillez s'inscrire  gratuitement</a></p>
              </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
