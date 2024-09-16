"use client";

import React, { useEffect, useMemo, useState } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { MRT_Localization_FR } from "material-react-table/locales/fr";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";


export default function ProduitTable() {

  const [data, setData] = useState([])

  const ListeProduit = async () => {
    try {
      const produit = await axios.get("/api/routes/produit");                  
      setData(produit.data.produits);
      console.log(produit.data.produits);
      
    } catch (error)
    {
      console.log("Erreur lors de la récupération des produits:", error);
    }
  }


  useEffect(()=>
    {
      ListeProduit()
    },[])

  const [fileName, setFileName] = useState("");

  const columns = useMemo(
    () => [
      {
        accessorKey: "design",
        header: "Numero de dossier",
        size: 150,
      },
      {
        accessorKey: "categorie",
        header: "Description",
        size: 150,
      },
      {
        accessorKey: "etat",
        header: "Etat",
        size: 200,
      },
      {
        accessorKey: "prix",
        header: " Droit de succession",
        size: 100,
      },
      {
        accessorKey: "quantite",
        header: " Defunt",
        size: 100,
      },
      {
        accessorKey: "id",
        header: "Action",
        size: 150,
        Cell: ({ row }) => (
          <div className="action">
            <a href={`/pages/admin/modification/produit/${row.original._id}`}>
              <Button variant="contained" color="primary">
                Modifier
              </Button>
            </a>
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
    renderTopToolbarCustomActions: ({ table }) => (
      <Box sx={{ display: "flex", gap: "16px", padding: "8px", flexWrap: "wrap" }} >
        <div style={{ display: "flex" }}>
          <StyledButton
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            style={{ textTransform: "none" }}
          >
            {fileName || "Sélectionner un fichier "}
            <VisuallyHiddenInput type="file" />
          </StyledButton>
          <RegularButton variant="contained" style={{ textTransform: "none" }}>
            Enregistrer
          </RegularButton>
        </div>
      </Box>
    ),
  });

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const StyledButton = styled(Button)({
    border: "none",
    margin: 0,
    borderRadius: "0",
    color: "rgb(31, 30, 30)",
    backgroundColor: "rgb(211, 211, 211)",
    "&:hover": {
      backgroundColor: "rgb(190, 190, 190)",
    },
  });

  const RegularButton = styled(Button)({
    borderRadius: "0",
    backgroundColor: "#1C979E",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#289096",
    },
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
          Creer un declaration
        </ButtonAjout>
      </a>
      <div>
        <MaterialReactTable table={table} />
      </div>
    </>
  );
}
