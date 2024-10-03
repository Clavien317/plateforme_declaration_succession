import React, { useEffect, useMemo, useState } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { MRT_Localization_FR } from "material-react-table/locales/fr";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import { Link } from "react-router-dom";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

function User() {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [emailTitle, setEmailTitle] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUserEmail, setSelectedUserEmail] = useState("");

  // Fonction pour récupérer les utilisateurs
  const listeUser = async () => {
    try {
      const Utilisateur = await axios.get("http://localhost:5000/api/v1/user/list");
      setData(Utilisateur.data);
    } catch (error) {
      console.log("Erreur lors de la récupération des users:", error);
    }
  };

  useEffect(() => {
    listeUser();
  }, []);

  const handleEtatCompteChange = async (id, etatcompte) => {
    const nouveauEtat = "Confirmé";
    const nif = Math.floor(100000000 + Math.random() * 900000000); 

    try {
      await axios.put(`http://localhost:5000/api/v1/user/update/${id}`, { etatcompte: nouveauEtat, nif: nif });
      alert("L'état du compte a été mis à jour !");
      listeUser();
      // Envoyer un email
      await axios.post("http://localhost:5000/api/v1/user/send-email", {
        id: id,
        nif:nif
      });
    } catch (error) {
      console.log("Erreur lors de la modification de l'état du compte:", error);
    }
  };

  const handleSendEmail = async () => {
    try {
      await axios.post("http://localhost:5000/api/v1/user/informer", {
        id: selectedUserId,
        title: emailTitle,
        message: emailMessage,
      });
      alert("Email envoyé !");
      setOpenModal(false);
    } catch (error) {
      console.log("Erreur lors de l'envoi de l'email:", error);
    }
  };

  const handleModalOpen = (userId, userEmail) => {
    setSelectedUserId(userId);
    setSelectedUserEmail(userEmail);
    setEmailTitle("");
    setEmailMessage("");
  
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "nif",
        header: "NIF",
        size: 150,
      },
      {
        accessorKey: "nom",
        header: "Nom complet",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Adresse Email",
        size: 150,
      },
      {
        accessorKey: "role",
        header: "Role",
        size: 150,
      },
      {
        accessorKey: "etatcompte",
        header: "Etat de compte",
        size: 150,
      },
      {
        accessorKey: "id",
        header: "Action",
        size: 150,
        Cell: ({ row }) => (
          <div className="action">
            <button
              onClick={() => handleEtatCompteChange(row.original._id, row.original.etatcompte)}
            >
              {row.original.etatcompte !== "Confirmé" ? "Confirmer" : ""}
            </button>
            <Link to={`/admin/modification/user/${row.original._id}`}>
              <Button variant="contained" color="primary" className="mx-9">
                Modifier
              </Button>
            </Link>
          </div>
        ),
      },
      {
        accessorKey: "inform",
        header: "Informer",
        size: 150,
        Cell: ({ row }) => (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleModalOpen(row.original._id, row.original.email)}
          >
            Informer
          </Button>
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
    <div>
      <MaterialReactTable table={table} />

      {/* Modal pour envoyer un email */}
      <Dialog open={openModal} onClose={handleModalClose}>
        <DialogTitle>Envoyer un Email à {selectedUserEmail}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Titre de l'email"
            name="titre"
            type="text"
            fullWidth
            variant="outlined"
            value={emailTitle}
            onChange={(e) => setEmailTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Message"
            name="message"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={emailMessage}
            onChange={(e) => setEmailMessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleSendEmail} color="primary">
            Envoyer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default User;
