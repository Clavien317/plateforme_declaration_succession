import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Declaration() {

  const dossierNum  = useParams();   
  const [input, setInput] = useState({});
  const navigate = useNavigate()

  const change = (e) => {
    const { name, value } = e.target;
    setInput(values => ({ ...values, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/v1/declaration/update/${dossierNum.id}`, input);
      alert('Mise à jour réussie');
      navigate("/declaration")
    } catch (err) {
      console.log("Erreur lors de la mise à jour de la déclaration", err);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/declaration/${dossierNum.id}`);
      const declaration = response.data;
      setInput(declaration);

    } catch (err) {
      console.log("Erreur lors de la récupération des données", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dossierNum]);

  return (
    <div>
      <form action="" method="post" className='demande' onSubmit={submit}>
        <h1 className='text-2xl text-black font-bold mx-3'>Détail de la déclaration</h1>

        <div className="champs">
          <label htmlFor="">Ce dossier est classé au numéro</label>
          <br />
          <input type="text" name='dossierNum' onChange={change} value={input.dossierNum || ''} />
        </div>

        <div className="champs">
          <label>Entête de déclaration ou titre</label>
          <br />
          <input type="text" name='titre' onChange={change} value={input.titre} />
        </div>

        <div className="champs">
          <label htmlFor="">Description testament</label>
          <br />
          <input type="text" name='description_test' onChange={change} value={input.description_test} />
        </div>

        <div className="champs">
          <label htmlFor="">Précisez ici la valeur s'il y a de dette (total sommes)</label>
          <br />
          <input type="text" name='dette' onChange={change} value={input.dette} />
        </div>

        <div className="champs">
          <label htmlFor="">Description de dette</label>
          <br />
          <textarea name="detail_dette" onChange={change} value={input.detail_dette}></textarea>
        </div>

        <h1 className='text-2xl text-black font-bold mx-3'>Détails du défunt</h1>

        <div className="champs">
          <label htmlFor="">Nom du défunt <span>*</span></label>
          <br />
          <input type="text" name='nom_defunt' onChange={change} value={input.nom_defunt} />
        </div>

        <div className="champs">
          <label htmlFor="">Date de naissance du défunt <span>*</span></label>
          <br />
          <input type="date" name='naiss_defunt' onChange={change} value={input.naiss_defunt} />
        </div>

        <div className="champs">
          <label htmlFor="">Responsabilité du défunt <span>*</span></label>
          <br />
          <input type="text" name='respo_defunt' onChange={change} value={input.respo_defunt} />
        </div>

        <div className="champs">
          <label htmlFor="">Date de décès</label>
          <br />
          <input type="date" name='dece_defunt' onChange={change} value={input.dece_defunt} />
        </div>

        <div className="champs">
          <label htmlFor="">Lien avec vous <span>*</span></label>
          <br />
          <input type="text" name='lien_defunt' onChange={change} value={input.lien_defunt} />
        </div>

        <div className="champs">
          <label htmlFor="">Votre CIN <span>*</span></label>
          <br />
          <input type="text" name='lega_cin' onChange={change} value={input.lega_cin} />
        </div>

        <br />
        <div className="champs">
          <button type="submit">Modifier</button>
        </div>
      </form>
    </div>
  );
}

export default Declaration;
