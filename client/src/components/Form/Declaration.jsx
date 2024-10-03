import React, { useState } from 'react'
import AdminLayout from '../../layout/ProfilLayout'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


function Declaration() {
  const [input, setInput] = useState({});
  const [IDuser, setIDuser] = useState('');


  const change = (e) => {
    const { name, value } = e.target;
    setInput(values => ({ ...values, [name]: value,dossierNum:900}));
  }

  const submit = async (e) => {
    e.preventDefault();
    try{
      console.log(input);
      
      await axios.post("http://localhost:5000/api/v1/declaration/create",input)
    } catch (err) {
      console.log("Erreur lors de declaration succession ", err);
    }
  }

  return (
    <div>
      <AdminLayout>
        <form action="" method="post" className='demande' onSubmit={submit}>
          <h1 className='text-2xl text-black font-bold mx-3'>Detail de declaration</h1>


          <div className="champs">
            <label htmlFor="">Ce dossier est classé au numero</label>
            <br />
            <input type="text" name='dossierNum' onChange={change} value={"U-NIF"} />
          </div>

          
          <div className="champs">
          <label>Entête de déclaration ou titre</label>
            <br />
            <input type="text" name='titre' onChange={change} />
          </div>

          <div className="champs">
            <label htmlFor="">Description testament</label>
            <br />
            <input type="text" name='description_test' onChange={change} />
          </div>

          <div className="champs">
            <label htmlFor="">Precisez ici la valeur s'il y a de dette (total sommes)</label>
            <br />
            <input type="text" name='dette' onChange={change} />
          </div>

          <div className="champs">
            <label htmlFor="">Description de dette</label>
            <br />
            <textarea name="detail_dette" onChange={change} id=""></textarea>
          </div>

          <h1 className='text-2xl text-black font-bold mx-3'>Detail de declaration</h1>

          <div className="champs">
            <label htmlFor="">Nom de defunt <span>*</span></label>
            <br />
            <input type="text" name='nom_defunt' onChange={change} />
          </div>

          <div className="champs">
            <label htmlFor="">Son date naissance <span>*</span></label>
            <br />
            <input type="date" name='naiss_defunt' onChange={change} />
          </div>

            <div className="champs">
                <label htmlFor="">Son responsabilité <span>*</span></label>
                <br />
                <input type="text" name='respo_defunt' onChange={change} />
            </div>
                      
            <div className="champs">
                <label htmlFor="">Date de décés </label>
                <br />
                <input type="date" name='dece_defunt' onChange={change} />
            </div>
            
          <div className="champs">
            <label htmlFor="">Lien avec vous <span>*</span></label>
            <br />
            <input type="text" name='lien_defunt' onChange={change} />
          </div>

            <div className="champs">
                <label htmlFor="">Votre CIN <span>*</span></label>
                <br />
                <input type="text" name='lega_cin' onChange={change} />
            </div>

          <h1 className='text-2xl text-black font-bold mx-3'>Bénéficier</h1>

          {/* Champs dynamiques pour les héritiers */}
            <div>
              <div className="champs">
                <label htmlFor="">Nom héritier <span>*</span></label>
                <br />
                <input type="text" name={`nomheritier`} onChange={change} />
              </div>

              <div className="champs">
                <label htmlFor="">Date naissance <span>*</span></label>
                <br />
                <input type="date" name={`naissheritier`} onChange={change} />
              </div>

              <div className="champs">
                <label htmlFor="">Lien parental avec defunt <span>*</span></label>
                <br />
                <input type="text" name={`lienheritier`} onChange={change} />
              </div>
            </div>


          <h1 className='text-2xl text-black font-bold mx-3'>Donation</h1>

            <div>
              <div className="champs">
                <label htmlFor="">Nom de biens <span>*</span></label>
                <br />
                <input type="text" name={`biens`} onChange={change} />
              </div>

              <div className="champs">
                <label htmlFor="">Description </label>
                <br />
                <textarea name={`bienDescription`} onChange={change} id=""></textarea>
              </div>

              <div className="champs">
                <label htmlFor="">Valeur (montant) <span>*</span></label>
                <br />
                <input type="text" name={`bienValeur`} onChange={change} />
              </div>
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
