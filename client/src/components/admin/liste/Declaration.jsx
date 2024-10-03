import React, { useEffect, useMemo, useState } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { MRT_Localization_FR } from "material-react-table/locales/fr";
import { Box, Modal, Typography, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";

export default function ProduitTable() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedDeclaration, setSelectedDeclaration] = useState(null);
  const [newEtat, setNewEtat] = useState("");

  const ListeSuccessions = async () => {
    try {
      const successions = await axios.get("http://localhost:5000/api/v1/declaration/list");
      setData(successions.data);
    } catch (error) {
      console.log("Erreur lors de la récupération des successions:", error);
    }
  };

  useEffect(() => {
    ListeSuccessions();
  }, []);

  const handleOpen = (row) => {
    setSelectedDeclaration(row.original);
    setNewEtat(row.original.etat); // Pré-remplir le champ "Etat"
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleUpdate = async () => {
    if (!selectedDeclaration || !newEtat) {
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/v1/declaration/update/${selectedDeclaration.dossierNum}`,
        { etat: newEtat }
      );
      console.log(response.data);
      // Mettre à jour les données localement pour refléter les changements
      ListeSuccessions();
      setOpen(false); // Fermer le modal après la mise à jour
    } catch (error) {
      console.error("Erreur lors de la mise à jour:", error);
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "dossierNum",
        header: "Numero de dossier",
        size: 150,
      },
      {
        accessorKey: "titre",
        header: "Entete",
        size: 200,
      },
      {
        accessorKey: "description_test",
        header: "Description",
        size: 200,
      },
      {
        accessorKey: "etat",
        header: "Etat",
        size: 150,
      },
      // {
      //   accessorKey: "actif",
      //   header: "Sommes actif",
      //   size: 150,
      // },
      // {
      //   accessorKey: "droitSuccession",
      //   header: "Taxes",
      //   size: 150,
      // },
      {
        accessorKey: "nom_defunt",
        header: "Défunt",
        size: 150,
      },
      {
        accessorKey: "id",
        header: "Action",
        size: 150,
        Cell: ({ row }) => (
          <div className="action">
            <Button variant="contained" color="primary" onClick={() => handleOpen(row)}>
              Detail
            </Button>
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
      <div>
        <MaterialReactTable table={table} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Détails de la déclaration
          </Typography>
          {selectedDeclaration && (
            <>
              <Typography id="modal-description" sx={{ mt: 2 }}>
                <strong>Numéro de dossier :</strong> {selectedDeclaration.dossierNum}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <strong>ID utilisateur :</strong> {selectedDeclaration.id_user}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <strong>Titre :</strong> {selectedDeclaration.titre}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <strong>Défunt :</strong> {selectedDeclaration.nom_defunt}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <strong>Date de naissance du défunt :</strong> {selectedDeclaration.naiss_defunt}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <strong>Responsable du défunt :</strong> {selectedDeclaration.respo_defunt}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <strong>Date de décès :</strong> {selectedDeclaration.dece_defunt}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <strong>Lien avec le défunt :</strong> {selectedDeclaration.lien_defunt}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <strong>CIN du légataire :</strong> {selectedDeclaration.lega_cin}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <strong>Description :</strong> {selectedDeclaration.description_test}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <strong>État :</strong>
                <TextField
                  value={newEtat}
                  onChange={(e) => setNewEtat(e.target.value)}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
              </Typography>
              <ButtonAjout variant="contained" onClick={handleUpdate}>
                Modifier
              </ButtonAjout>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}
