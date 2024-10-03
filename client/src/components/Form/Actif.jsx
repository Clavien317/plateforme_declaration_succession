import React, { useEffect, useState } from 'react'
import AdminLayout from '../../layout/ProfilLayout'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


function Declaration() {
  const [input, setInput] = useState({});
  const [IDuser, setIDuser] = useState('');

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token-succession-user");
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setIDuser(decodedToken.id);
    }
  }, []);

  const change = (e) => {
    const { name, value } = e.target;
    setInput(values => ({ ...values, [name]: value,userId:IDuser}));
  }

  const submit = async (e) => {
    e.preventDefault();
    try{      
      await axios.post("http://localhost:5000/api/v1/actif/create",input)
      alert("Actif Cree avec success")
      navigate("/declaration/actif")
    } catch (err) {
      console.log("Erreur lors de declaration succession ", err);
    }
  }

  return (
    <div>
      <AdminLayout>
        <form action="" method="post" className='demande' onSubmit={submit}>
          <h1 className='text-2xl text-black font-bold mx-3'>Ajouter votre actif</h1>
            <div className="champs">
              <label htmlFor="">Ce dossier est classé au numero</label>
              <br />
              <input type="text" name='dossierNum' onChange={change} />
            </div>

          <div className="champs">
            <label>Designation</label>
            <br />
            <input type="text" name='biens' onChange={change} />
          </div>

          <div className="champs">
            <label htmlFor="">Description </label>
            <br />
            <input type="text" name='description' onChange={change} />
          </div>

          <div className="champs">
            <label htmlFor="">Valeur</label>
            <br />
            <input type="text" name='valeur' onChange={change} />
          </div>

          <div className="champs">
            <label htmlFor="">Beneficiaire</label>
            <br />
            <textarea name="beneficiaire" onChange={change} id=""></textarea>
          </div>

          <br />
          <div className="champs">
            <button>Envoyer</button>
          </div>
        </form>
      </AdminLayout>
    </div>
  )
}

export default Declaration;
