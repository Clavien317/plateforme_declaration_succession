import React, { useState } from 'react'
import AdminLayout from '../../layout/ProfilLayout'

function Declaration() {
  
  const [heirs, setHeirs] = useState([{
    nom: '', datenaiss: '', relation: ''
  }]);
  
  const [donations, setDonations] = useState([{
    propertyName: '', description: '', value: ''
  }]);

  // Ajouter un autre héritier
  const addHeir = () => {
    setHeirs([...heirs, { nom: '', datenaiss: '', relation: '' }]);
  }

  // Ajouter une autre donation
  const addDonation = () => {
    setDonations([...donations, { propertyName: '', description: '', value: '' }]);
  }

  return (
    <div>
      <AdminLayout>
        <form action="" method="post" className='demande'>

          <h1 className='text-2xl text-black font-bold mx-3'>Detail de declaration</h1>


          <div className="champs">
            <label htmlFor="">Ce dossier est classé au numero</label>
            <br />
            <input type="text" name='' defaultValue={900} />
          </div>

          <div className="champs">
            <label htmlFor="">Description testament</label>
            <br />
            <input type="text" name='' />
          </div>

          <div className="champs">
            <label htmlFor="">Description testament</label>
            <br />
            <input type="text" name='' />
          </div>

          <div className="champs">
            <label htmlFor="">Precisez ici la valeur s'il y a de dette (total sommes)</label>
            <br />
            <input type="text" name='' />
          </div>

          <div className="champs">
            <label htmlFor="">Description de dette</label>
            <br />
            <textarea name="" id=""></textarea>
          </div>

          <h1 className='text-2xl text-black font-bold mx-3'>Detail de declaration</h1>

          <div className="champs">
            <label htmlFor="">Nom de defunt <span>*</span></label>
            <br />
            <input type="text" name='' />
          </div>

          <div className="champs">
            <label htmlFor="">Son date naissance <span>*</span></label>
            <br />
            <input type="date" name='' />
          </div>

            <div className="champs">
                <label htmlFor="">Son responsabilité <span>*</span></label>
                <br />
                <input type="text" name='' />
            </div>
                      
            <div className="champs">
                <label htmlFor="">Date de décés </label>
                <br />
                <input type="date" name='' />
            </div>
            
          <div className="champs">
            <label htmlFor="">Lien avec vous <span>*</span></label>
            <br />
            <input type="text" name='' />
          </div>

            <div className="champs">
                <label htmlFor="">Votre CIN <span>*</span></label>
                <br />
                <input type="text" name='' />
            </div>

          <h1 className='text-2xl text-black font-bold mx-3'>Bénéficier</h1>

          {/* Champs dynamiques pour les héritiers */}
          {heirs.map((heir, index) => (
            <div key={index}>
              <div className="champs">
                <label htmlFor="">Nom héritier <span>*</span></label>
                <br />
                <input type="text" name={`heirName${index}`} />
              </div>

              <div className="champs">
                <label htmlFor="">Date naissance <span>*</span></label>
                <br />
                <input type="date" name={`heirDob${index}`} />
              </div>

              <div className="champs">
                <label htmlFor="">Lien parental avec defunt <span>*</span></label>
                <br />
                <input type="text" name={`heirRelationship${index}`} />
              </div>
            </div>
          ))}
          
          <button type="button" className='mx-3' onClick={addHeir}>
            Ajouter un autre héritier
          </button>

          <h1 className='text-2xl text-black font-bold mx-3'>Donation</h1>

          {/* Champs dynamiques pour les donations */}
          {donations.map((donation, index) => (
            <div key={index}>
              <div className="champs">
                <label htmlFor="">Nom de biens <span>*</span></label>
                <br />
                <input type="text" name={`propertyName${index}`} />
              </div>

              <div className="champs">
                <label htmlFor="">Description </label>
                <br />
                <textarea name={`propertyDescription${index}`} id=""></textarea>
              </div>

              <div className="champs">
                <label htmlFor="">Valeur (montant) <span>*</span></label>
                <br />
                <input type="text" name={`propertyValue${index}`} />
              </div>
            </div>
          ))}

          <button type="button" className='mx-3' onClick={addDonation}>
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
