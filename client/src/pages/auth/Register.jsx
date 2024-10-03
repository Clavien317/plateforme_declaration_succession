import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // N'oublie pas d'importer axios

function Inscrire() {
  const navigate = useNavigate(); // Correction : utilise navigate
  const [input, setInput] = useState({
    nom: '',
    tel: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const change = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    try {
      await axios.post("http://localhost:5000/api/v1/user/create", input);
      navigate("/");
    } catch (err) {
      setErrorMessage("Erreur lors de l'inscription. Veuillez réessayer.");
      console.log("Erreur lors de l'inscription de l'utilisateur", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="auth">
        <br />
        <form onSubmit={submit}>
          <div className="back" onClick={() => navigate("/")}>
            <IoMdArrowRoundBack />
          </div>
          <br />
          <h1 className="text-2xl font-bold text-center text-blue-600">Inscription</h1>

          <div className="data">
            <div className="saisir">
              <label htmlFor="nom">Nom complet <span>*</span></label>
              <br />
              <input
                type="text"
                name="nom"
                placeholder="Saisissez votre nom complet..."
                value={input.nom}
                onChange={change}
                required
              />
            </div>

            <div className="saisir">
              <label htmlFor="tel">Tel <span>*</span></label>
              <br />
              <input
                type="text"
                name="tel"
                placeholder="Saisissez votre téléphone..."
                value={input.tel}
                onChange={change}
                required
              />
            </div>

            <div className="saisir">
              <label htmlFor="email">Email <span>*</span></label>
              <br />
              <input
                type="text"
                name="email"
                placeholder="Saisissez votre Email..."
                value={input.email}
                onChange={change}
                required
              />
            </div>

            <div className="saisir">
              <label htmlFor="password">Mot de passe <span>*</span></label>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Entrez votre mot de passe ***"
                value={input.password}
                onChange={change}
                required
              />
            </div>

            {errorMessage && (
              <div className="text-red-500 text-sm my-2">{errorMessage}</div>
            )}

            <div className="saisir">
              <button type="submit" disabled={isLoading}>
                {isLoading ? "Inscription en cours..." : "Inscrire"}
              </button>
              <div className="google">
                <div className="icons">
                  <FcGoogle />
                </div>
                <h3 className="mx-3">Connectez avec un compte Google</h3>
              </div>
            </div>

            <div className="inscrire">
              <p>
                Si vous avez un compte,{" "}
                <a href="/login">Veuillez vous connecter directement</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Inscrire;
