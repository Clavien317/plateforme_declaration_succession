import DefaultLayout from '../layout/DefaultLayout';

const Profile = () => {
  return (
    <DefaultLayout>
      <div className="profil max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
        {/* Section Avatar + Informations */}
        <div className="flex items-center space-x-4 mb-6">
          <img
            className="w-24 h-24 rounded-full border-2 border-gray-300"
            src="/Full-Stack-Developer-1.webp"
            alt="User Avatar"
          />
          <div>
            <h2 className="text-2xl font-semibold">Nom de l'utilisateur</h2>
            <p className="text-gray-600">email@example.com</p>
          </div>
        </div>

        {/* Section Statistiques / Activités Récentes */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3">Activités récentes</h3>
          <ul className="list-disc ml-5 text-gray-700">
            <li>A effectué une commande le 12 septembre 2024</li>
            <li>A laissé une note sur un produit</li>
            <li>Mis à jour son profil le 10 septembre 2024</li>
          </ul>
        </div>

        {/* Formulaire Mise à Jour Informations */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3">Mettre à jour les informations</h3>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-gray-700">Nom</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
                  value="Nom de l'utilisateur"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
                  value="email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
              <div>
                <label className="block mb-2 text-gray-700">Date naissance</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
                  value="Nom de l'utilisateur"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Adresse</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
                  value="email@example.com"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Mettre à jour
            </button>
          </form>
        </div>

        {/* Paramètres de Sécurité */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Sécurité</h3>
          <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
            Changer le mot de passe
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
