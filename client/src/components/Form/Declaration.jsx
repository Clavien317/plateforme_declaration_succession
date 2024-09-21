import React, { useState } from 'react'
import AdminLayout from '../../layout/ProfilLayout'

function Declaration() {

    const [formData, setFormData] = useState({
        titre: '',
        detailsDonation: '',
        affirmationSincerite: '',
        etat: '',
        donations: [],
        passifs: [],
        testamentDetail: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Logique pour soumettre les données
        console.log(formData);
      };
    

  return (
    <div>
        <AdminLayout>
            <div className="form-declaration">
                <h1>Effectuer un declaration</h1>

                <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto bg-white p-6 border border-gray-300 rounded-lg shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block font-semibold">Titre de la Succession</label>
                        <input
                        type="text"
                        name="titre"
                        value={formData.titre}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                        />
                    </div>

                    <div>
                        <label className="block font-semibold">Détails de la Donation</label>
                        <textarea
                        name="detailsDonation"
                        value={formData.detailsDonation}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        rows="1"
                        required
                        ></textarea>
                    </div>

                    <div>
                        <label className="block font-semibold">Affirmation de Sincérité</label>
                        <textarea
                        name="affirmationSincerite"
                        value={formData.affirmationSincerite}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        rows="1"
                        required
                        ></textarea>
                    </div>

                    <div>
                        <label className="block font-semibold">État de la Succession</label>
                        <input
                        type="text"
                        name="etat"
                        value={formData.etat}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="block font-semibold">Détail du Testament</label>
                        <textarea
                        name="testamentDetail"
                        value={formData.testamentDetail}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        rows="4"
                        ></textarea>
                    </div>
                    </div>

                    <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 mt-4"
                    >
                    Soumettre la Déclaration
                    </button>
                </form>
            </div>
        </AdminLayout>
    </div>
  )
}

export default Declaration