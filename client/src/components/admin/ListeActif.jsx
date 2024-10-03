import { useEffect, useMemo, useState } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { MRT_Localization_FR } from "material-react-table/locales/fr";
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProduitTable() {
  const [data, setData] = useState([]);
  const [IDuser, setIDuser] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [selectedActif, setSelectedActif] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token-succession-user");
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setIDuser(decodedToken.id);
    }
  }, []);

  const listeActif = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/api/v1/actif/list/${IDuser}`);
      setData(result.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des déclarations :", error);
    }
  };

  useEffect(() => {
    listeActif();
  }, []);

  const handleOpenModal = (actif) => {
    setSelectedActif(actif);  // Remplir l'actif sélectionné
    setOpenModal(true);  // Ouvrir le modal
  };

  const handleCloseModal = () => {
    setOpenModal(false);  // Fermer le modal
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedActif((prev) => ({ ...prev, [name]: value }));  // Mettre à jour l'actif sélectionné
  };

  const handleSave = async () => {
    try {        
      await axios.put(`http://localhost:5000/api/v1/actif/update/${selectedActif._id}`, selectedActif);
      setOpenModal(false);
      listeActif();
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'actif :", error);
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
        accessorKey: "taxe",
        header: "Taxes",
        size: 200,
        Cell: ({ row }) => (
            <>
              {(Number(row.original.valeur) * 0.03).toFixed(2)}
            </>
          )
      },
      {
        accessorKey: "description",
        header: "Description",
        size: 150,
      },
      {
        accessorKey: "beneficiaire",
        header: "Apparient a",
        size: 150,
      },
      {
        accessorKey: "_id",
        header: "Action",
        size: 150,
        Cell: ({ row }) => (
          <div className="action">
              <Button variant="contained" color="primary" onClick={() => handleOpenModal(row.original)}>
                Détail
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
      <a href="/add-actif" className="mx-5">
        <ButtonAjout style={{ textTransform: "none" }}>
          Créer une actif
        </ButtonAjout>
      </a>
      <div>
        <MaterialReactTable table={table} />
      </div>

      {/* Modal pour afficher et modifier l'actif */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Détails de l'Actif</DialogTitle>
        <DialogContent>
          {selectedActif && (
            <>
              <TextField
                label="Numero de dossier"
                name="dossierNum"
                value={selectedActif.dossierNum}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Désignation du bien"
                name="biens"
                value={selectedActif.biens}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Valeur"
                name="valeur"
                value={selectedActif.valeur}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Description"
                name="description"
                value={selectedActif.description}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Appartient à"
                name="beneficiaire"
                value={selectedActif.beneficiaire}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">Annuler</Button>
          <Button onClick={handleSave} color="primary">Sauvegarder</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
