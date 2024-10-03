import React, { useEffect, useMemo, useState } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { MRT_Localization_FR } from "material-react-table/locales/fr";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProduitTable() {
  const [data, setData] = useState([]);
  const [totalActifGlobal, setTotalActifGlobal] = useState(0);
  const [actifsParDossier, setActifsParDossier] = useState(0);

  const [totauxParDossier, setTotauxParDossier] = useState({});
  const [totalGlobalActif, setTotalGlobalActif] = useState(0);

  const calculerTotauxActifs = async () => {
    try {
      const declarations = await axios.get("http://localhost:5000/api/v1/declaration/list");
      const totauxTemp = {};
      let sommeTotale = 0;

      // Itérer sur chaque déclaration pour récupérer la somme des actifs
      for (const declaration of declarations.data) {
        const result = await axios.get(`http://localhost:5000/api/v1/actif/list/${declaration.dossierNum}`);
        if (Array.isArray(result.data)) {
          const sommeActifs = result.data.reduce((acc, actif) => acc + (actif.valeur || 0), 0);
          totauxTemp[declaration.dossierNum] = sommeActifs;
          sommeTotale += sommeActifs; // Ajouter au total global
        }
      }

      setTotauxParDossier(totauxTemp);
      setTotalGlobalActif(sommeTotale); // Mettre à jour le total global
      setData(declarations.data); // Mettre à jour les données des déclarations
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  };

  useEffect(() => {
    calculerTotauxActifs();
  }, []);

  const listeDeclaration = async () => {
    try {
      const result = await axios.get("http://localhost:5000/api/v1/declaration/list");
      setData(result.data);

      let totalGlobal = 0;
      const actifsParDossierTemp = {};
      setActifsParDossier(actifsParDossierTemp);
      setTotalActifGlobal(totalGlobal);
    } catch (error) {
      console.error("Erreur lors de la récupération des déclarations :", error);
    }
  };

  useEffect(() => {
    listeDeclaration();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "dossierNum",
        header: "Numero de dossier",
        size: 150,
      },
      {
        accessorKey: "titre",
        header: "Titre de declaration",
        size: 200,
      },
      {
        accessorKey: "etat",
        header: "Etat",
        size: 150,
      },
      {
        accessorKey: "sommeActif",
        header: "Somme Actif (Valeur)",
        size: 150,
        Cell: ({ row }) => (
          <>
            {totauxParDossier[row.original.dossierNum] || 0}
          </>
        ),
      },
      {
        accessorKey: "droitSuccession",
        header: "Taxes",
        size: 150,
        Cell: ({ row }) => (
          <>
            {(actifsParDossier[row.original.dossierNum] || 0) * 0.005}
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
            <Link to={`/declaration/${row.original._id}`}>
              <Button variant="contained" color="primary">
                Modifier
              </Button>
            </Link>
          </div>
        ),
      },
    ],
    [actifsParDossier]
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
        <Box mt={2}>
          <h3>Total des Actifs : {totalActifGlobal} Ariary</h3>
        </Box>
      </div>
    </>
  );
}
