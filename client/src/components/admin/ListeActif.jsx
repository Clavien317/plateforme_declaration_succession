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


  const listeActif = async () => {
    try {
      const result = await axios.get("http://localhost:5000/api/v1/actif/list");
      setData(result.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des déclarations :", error);
    }
  }


  useEffect(() => {
    listeActif();
  }, []);


  const columns = useMemo(
    () => [
      {
        accessorKey: "dossierNum",
        header: "Numero de dossier",
        size: 150,
      },
      {
        accessorKey: "biens",
        header: "Designation du biens",
        size: 200,
      },
      {
        accessorKey: "valeur",
        header: "Valeur",
        size: 200,
      },
      {
        accessorKey: "description",
        header: "Description",
        size: 150,
      },
      {
        accessorKey: "beneficier",
        header: "Apparient a",
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
                Detail
              </Button>
            </Link>
          </div>
        ),
      },
    ],
    [] 
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
