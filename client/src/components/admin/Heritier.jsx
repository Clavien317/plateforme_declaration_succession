"use client"

import React, { useEffect, useMemo, useState } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { MRT_Localization_FR } from "material-react-table/locales/fr";
import Button from "@mui/material/Button";
import axios from "axios";

export default function Home() {

  const [data, setData] = useState([]);

  const listeUser = async () => {
    try {
      const Utilisateur = await axios.get("/api/routes/user");                  
      setData(Utilisateur.data.users);
    } catch (error)
    {
      console.log("Erreur lors de la récupération des users:", error);
    }
  };

  useEffect(()=>
  {
    listeUser()
  },[])

  const columns = useMemo(
    () => [
      {
        accessorKey: "nom",
        header: "Nom complet",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Lien parentee",
        size: 150,
      },
      {
        accessorKey: "tel",
        header: "Date de naissance",
        size: 150,
      },
      {
        accessorKey: "role",
        header: "Contact",
        size: 150,
      },
      {
        accessorKey: "id",
        header: "Action",
        size: 150,
        Cell: ({ row }) => (
          <div className="action">
            <a href={`/pages/admin/modification/user/${row.original._id}`}>
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
  });

  return (
    <>
        <h1 className="text-4xl text-start font-bold my-4 text-black mx-5">Liste des heritier</h1>
        <MaterialReactTable table={table} />
    </>
  );
}
