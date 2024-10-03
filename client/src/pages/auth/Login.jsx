import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from 'axios';


function Login() {
  const router = useNavigate()
  const [input, setInput] = useState({});
  const navigate = useNavigate()

  const change=(e)=>{
        const name = e.target.name;
        const value = e.target.value
        setInput(values=>({...values,[name]:value}))
  }

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/v1/user/login", input);
            if (response.data.login) {
                localStorage.setItem("token-succession-user",response.data.token)
                if(response.data.token){
                    console.log(input.email);
                    console.log(response.data.token);
                    navigate(`/dashboard`); 
                }
            }
            else{
                alert("Email ou mot de passe invalide");
            }
        } catch (error) {
            alert("Mot de passe incorrect")
            console.log("Erreur lors de la connexion", error);
        }
    }

  return (
    <>
      <div className="auth">
        <br />
        <form action="" onSubmit={submit}>
          <div className="back" onClick={()=>router("/")}>
            <IoMdArrowRoundBack />
          </div>
          <br />
          <h1 className="text-3xl font-bold text-center mb-4 my-4 text-blue-600">Bienvenue  </h1>
          <p>
            Nous sommes ravis de vous accueillir sur notre plateforme. 
          </p>

          <div className="data">
              <div className="saisir">
                <label htmlFor="">NIF</label>
                <br />
                <input type="text" name='nif' onChange={change} placeholder='Saisissez votre NIF...'required />
              </div>

              <div className="saisir">
                <label htmlFor="">Mot de passe</label>
                <br />
                <input type="password" name='password' onChange={change} placeholder='Entrer votre mot de passe ***'required/>
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
