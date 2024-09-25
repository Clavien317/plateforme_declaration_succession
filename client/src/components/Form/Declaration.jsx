import React, { useState } from 'react'
import AdminLayout from '../../layout/ProfilLayout'
import { useNavigate } from 'react-router-dom';

function Declaration() {
  const [input, setInput] = useState({});
  const router = useNavigate()

  const change = (e) => {
    const { name, value } = e.target;
    setInput(values => ({ ...values, [name]: value}));
  }

  const submit = async (e) => {
    e.preventDefault();
    try{
      console.log(input);
      
      // await axios.post("/api/routes/prixBesoin",input)
      // router.push("/pages/admin/")
    } catch (err) {
      console.log("Erreur lors de l'ajout prix besoin", err);
    }
  }


  const [heirs, setHeirs] = useState([{
    nom: '', datenaiss: '', relation: ''
  }]);
  
  const [donations, setDonations] = useState([{
    nom: '', description: '', valeur: ''
  }])

  // Ajouter un autre héritier
  const addHeir = () => {
    setHeirs([...heirs, { nom: '', datenaiss: '', relation: '' }]);
  }

  // Ajouter une autre donation
  const addDonation = () => {
    setDonations([...donations, { nom: '', description: '', valeur: '' }]);
  }

  return (
    <div>
      <AdminLayout>
        <form action="" method="post" className='demande' onSubmit={submit}>

          <h1 className='text-2xl text-black font-bold mx-3'>Detail de declaration</h1>


          <div className="champs">
            <label htmlFor="">Ce dossier est classé au numero</label>
            <br />
            <input type="text" name='dossierNum' onChange={change} defaultValue={900} />
          </div>

          <div className="champs">
            <label htmlFor="">Description testament</label>
            <br />
            <input type="text" name='description_test' onChange={change} />
          </div>

          <div className="champs">
            <label htmlFor="">Description testament</label>
            <br />
            <input type="text" name='' />
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
          {heirs.map((heir, index) => (
            <div key={index}>
              <div className="champs">
                <label htmlFor="">Nom héritier <span>*</span></label>
                <br />
                <input type="text" name={`nomheritier${index}`} onChange={change} />
              </div>

              <div className="champs">
                <label htmlFor="">Date naissance <span>*</span></label>
                <br />
                <input type="date" name={`naissheritier${index}`} onChange={change} />
              </div>

              <div className="champs">
                <label htmlFor="">Lien parental avec defunt <span>*</span></label>
                <br />
                <input type="text" name={`lienheritier${index}`} onChange={change} />
              </div>
            </div>
          ))}
          
          <button type="button" className='mx-3 other-donate' onClick={addHeir}>
            Ajouter un autre héritier
          </button>

          <h1 className='text-2xl text-black font-bold mx-3'>Donation</h1>

          {/* Champs dynamiques pour les donations */}
          {donations.map((donation, index) => (
            <div key={index}>
              <div className="champs">
                <label htmlFor="">Nom de biens <span>*</span></label>
                <br />
                <input type="text" name={`Bien${index}`} onChange={change} />
              </div>

              <div className="champs">
                <label htmlFor="">Description </label>
                <br />
                <textarea name={`bienDescription${index}`} onChange={change} id=""></textarea>
              </div>

              <div className="champs">
                <label htmlFor="">Valeur (montant) <span>*</span></label>
                <br />
                <input type="text" name={`bienValeur${index}`} onChange={change} />
              </div>
            </div>
          ))}

          <button type="button" className='mx-3 other-donate' onClick={addDonation}>
            Ajouter une autre donation
          </button>
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
