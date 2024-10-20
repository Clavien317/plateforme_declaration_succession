import { useEffect, useMemo, useState } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { MRT_Localization_FR } from "material-react-table/locales/fr";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProduitTable() {
  const [data, setData] = useState([]);
  const [valeurs, setValeurs] = useState({});
  const [IdUser, setIdUser] = useState("");


  useEffect(() => {
    const token = localStorage.getItem("token-succession-user");
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        setIdUser(decodedToken.id);
      } catch (error) {
        console.error("Erreur lors de la décodification du token :", error);
      }
    }
  }, []);




  const listeDeclaration = async (idUser) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/declaration/list/${idUser}`);
      setData(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des déclarations :", error);
    }
  };

  // Mettre à jour les valeurs des actifs pour chaque déclaration
  useEffect(() => {
    if (IdUser) {
      listeDeclaration(IdUser);
    }
  }, [IdUser]);


  const ListeActif = async (dossierNum) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/actif/lister/${dossierNum}`);
      console.log("Liste actif : ", response.data);
      
      let somme = 0;
      response.data.forEach((actif) => {
        console.log("Valeur:", actif.valeur);
        somme += actif.valeur;
      });
      return somme;
    } catch (error) {
      console.error('Erreur lors de la récupération du actif utilisateur', error);
      return 0;
    }
  };

  useEffect(() => {
    listeDeclaration();
  }, []);

  useEffect(() => {
    const fetchValeurs = async () => {
      const nouvellesValeurs = {};
      for (let declaration of data) {
        const sommeValeur = await ListeActif(declaration.dossierNum);
        nouvellesValeurs[declaration.dossierNum] = sommeValeur;
      }
      setValeurs(nouvellesValeurs);
    };
    
    if (data.length > 0) {
      fetchValeurs();
    }
  }, [data]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "dossierNum",
        header: "Numero de dossier",
        size: 150,
      },
      {
        accessorKey: "titre",
        header: "Titre de déclaration",
        size: 200,
      },
      {
        accessorKey: "lega_cin",
        header: "CIN",
        size: 200,
      },
      {
        accessorKey: "etat",
        header: "État",
        size: 150,
      },
      {
        accessorKey: "sommeActif",
        header: "Somme Actif (Valeur)",
        size: 150,
        Cell: ({ row }) => (
          <>
            {valeurs[row.original.dossierNum] !== undefined ? valeurs[row.original.dossierNum] : "Calcul en cours..."}
          </>
        ),
      },
      {
        accessorKey: "taxe",
        header: "Taxes",
        size: 150,
        Cell: ({ row }) => (
          <>
            {valeurs[row.original.dossierNum] !== undefined ? valeurs[row.original.dossierNum]*0.05 : "Calcul en cours..."}
          </>
        ),
      },
      {
        accessorKey: "nom_defunt",
        header: "Défunt",
        size: 150,
      },
      {
        accessorKey: "_id",
        header: "Action",
        size: 150,
        Cell: ({ row }) => (
          <div className="action">
            <Link to={`/declaration/${row.original.dossierNum}`}>
              <Button variant="contained" color="primary">
                Détail
              </Button>
            </Link>
          </div>
        ),
      },
    ],
    [valeurs] // On ajoute 'valeurs' comme dépendance
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnActions: false,
    enableHiding: false,
    paginationDisplayMode: "pages",
    localization: MRT_Localization_FR,
    positionToolbarAlertBanner: "bottom",
  });

  const ButtonAjout = styled(Button)({
    borderRadius: "8",
    border: "1px solid gray",
    backgroundColor: "rgb(219, 219, 219)",
    color: "rgb(27, 27, 27)",
    "&:hover": {
      backgroundColor: "#e42e8c",
      color: "#fff",
    },
    marginBottom: "20px",
  });

  return (
    <>
      <a href="/demande-declaration" className="mx-5">
        <ButtonAjout style={{ textTransform: "none" }}>
          Créer une déclaration
        </ButtonAjout>
      </a>
      <div>
        <MaterialReactTable table={table} />
      </div>
    </>
  );
}
