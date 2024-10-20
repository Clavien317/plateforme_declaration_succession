import { useEffect, useMemo, useState } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { MRT_Localization_FR } from "material-react-table/locales/fr";
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";

export default function HeritierTable() {
  const [data, setData] = useState([]);
  const [IDuser, setIDuser] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [selectedHeritier, setSelectedHeritier] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token-succession-user");
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setIDuser(decodedToken.id);
    }
  }, []);

  const listeHeritier = async (IDuser) => {
    try {
      const result = await axios.get(`http://localhost:5000/api/v1/heritier/list/${IDuser}`);
      setData(result.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des héritiers :", error);
    }
  };

  useEffect(() => {
    if (IDuser) {
      listeHeritier(IDuser);
    }
  }, [IDuser]);

  const handleOpenModal = (heritier) => {
    setSelectedHeritier(heritier);  // Remplir les informations de l'héritier sélectionné
    setOpenModal(true);  // Ouvrir le modal
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedHeritier((prev) => ({ ...prev, [name]: value }));  // Mettre à jour l'héritier sélectionné
  };

  const handleSave = async () => {
    try {        
      await axios.put(`http://localhost:5000/api/v1/heritier/update/${selectedHeritier._id}`, selectedHeritier);
      setOpenModal(false);
      listeHeritier();  // Recharger la liste des héritiers après la mise à jour
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'héritier :", error);
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "dossierNum",
        header: "Numéro de dossier",
        size: 150,
      },
      {
        accessorKey: "nom",
        header: "Nom",
        size: 200,
      },
      {
        accessorKey: "datenaiss",
        header: "Date de naissance",
        size: 200,
      },
      {
        accessorKey: "relation",
        header: "Lien parental",
        size: 200,
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
      <a href="/add-heritier" className="mx-5">
        <ButtonAjout style={{ textTransform: "none" }}>
          Ajouter un héritier
        </ButtonAjout>
      </a>
      <div>
        <MaterialReactTable table={table} />
      </div>

      {/* Modal pour afficher et modifier l'héritier */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Détails de l'Héritier</DialogTitle>
        <DialogContent>
          {selectedHeritier && (
            <>
              <TextField
                label="Numéro de dossier"
                name="dossierNum"
                value={selectedHeritier.dossierNum}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Nom"
                name="nom"
                value={selectedHeritier.nom}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Date de naissance"
                name="datenaiss"
                type="date"
                value={selectedHeritier.datenaiss}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Lien de parenté"
                name="relation"
                value={selectedHeritier.relation}
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
