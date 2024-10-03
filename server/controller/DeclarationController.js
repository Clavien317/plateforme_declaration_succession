const Declaration = require("../model/Declaration")
const Actif = require("../model/Actif")
const Passif = require("../model/Passif")
const Heritier = require("../model/Heritier")



const createDeclaration = async (req, res) => {
    const { dossierNum, titre, description_test, dette, detail_dette, nom_defunt, naiss_defunt, respo_defunt, dece_defunt, lien_defunt, lega_cin, nomheritier, naissheritier, lienheritier, biens, bienDescription, bienValeur } = req.body;
  
    try {
      const newDeclaration = await Declaration.create({
        dossierNum:dossierNum,
        id_user:"932730973",
        titre:titre,
        description_test:description_test,
        nom_defunt:nom_defunt,
        naiss_defunt:naiss_defunt,
        respo_defunt:respo_defunt,
        dece_defunt:dece_defunt,
        lien_defunt:lien_defunt,
        lega_cin:lega_cin,
      });
  
      const newHeritier = await Heritier.create({
        nom: nomheritier,
        datenaiss: naissheritier,
        relation: lienheritier,
        declarationId: newDeclaration._id,
        dossierNum:dossierNum
      })
  
      const newActif = await Actif.create({
        biens:biens,
        description: bienDescription,
        valeur: bienValeur,
        declarationId: newDeclaration._id,
        dossierNum:dossierNum,
        beneficiaire:"xxxxxxxxxxx"
      })

      const newPassif = await Passif.create({
        dette: dette,
        detail_dette: detail_dette,
        declarationId: newDeclaration._id,
        dossierNum:dossierNum
      })
  
      res.status(201).json({ message: "Insertion de la déclaration réussie",data:{newDeclaration,newActif,newHeritier,newPassif} });
    } catch (error) {
      console.error("Erreur lors de l'insertion", error);
      res.status(500).json({ message: "Erreur serveur lors de l'insertion" });
    }
  }

const list=async(req,res)=>{
    const data = await Declaration.find()
    res.json(data)
}

const listSpec = async (req, res) => {
  try {
      const { id_user } = req.params;
      const data = await Declaration.find({ id_user });
      if (data.length === 0) {
          return res.status(404).json({ message: 'Aucun declaration trouvé pour ce id_user.' });
      }
      res.status(200).json(data)
  } catch (error) {
      res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
}

const update = async (req, res) => {
  const { dossierNum } = req.params;  
  const data = req.body;
  if (!dossierNum || !data) {
      return res.status(400).json("Données invalides");
  }
  try {
      const updatedDeclaration = await Declaration.findOneAndUpdate({ dossierNum: dossierNum },data,{ new: true, runValidators: true })
      if (updatedDeclaration) {
          res.json({
              message: "Déclaration modifiée avec succès",
              declaration: updatedDeclaration
          });
      } else {
          res.status(404).json("Numéro de dossier non trouvé");
      }
  } catch (error) {
      console.error("Erreur lors de la mise à jour:", error);
      res.status(500).json("Erreur serveur");
  }
}


const deleted = async (req, res) => {
    const id = req.params.id;
    await Declaration.findByIdAndDelete(id);
    res.status(200).json({ message: "Declaration supprimée avec succès" });
};

const Singledata =async(req,res)=>{
    const {id} = req.params
    const data = await Declaration.findOne({ dossierNum: id })
    res.json(data)
}


module.exports ={createDeclaration,update,deleted,list,Singledata,listSpec}