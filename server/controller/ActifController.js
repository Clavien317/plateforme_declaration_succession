const Actif = require("../model/Actif")



const create = async (req, res) => {
    const { dossierNum, biens, bienDescription, bienValeur } = req.body;
  
    try {
      const newActif = await Actif.create({
        biens:biens,
        description: bienDescription,
        valeur: bienValeur,
        declarationId: "j...jkhiuh",
        dossierNum:dossierNum,
        beneficiaire:"xxxxxxxxxxx"
      })

      res.status(201).json({ message: "Insertion des actifs réussie",data:{newActif} });
    } catch (error) {
      console.error("Erreur lors de l'insertion", error);
      res.status(500).json({ message: "Erreur serveur lors de l'insertion" });
    }
  }

const list=async(req,res)=>{
    const data = await Actif.find()
    res.json(data)
}

const update=async(req,res)=>{
    const id = req.params.id;
    const data = req.body
    if (!id || !data) {
        return res.status(400).json("Données invalides");
    }

    try {
        const updatedActif = await Actif.findByIdAndUpdate(id, data, { new: true, runValidators: true });
        if (updatedActif) {
            res.json({
                message: "Actif modifiée avec succès",
                Actif: updatedActif
            })
        } else {
            res.status(404).json("ID non trouvé");
        }
    } catch (error) 
    {
        console.error("Erreur lors de la mise à jour:", error);
        res.status(500).json("Erreur serveur");
    }
}

const deleted = async (req, res) => {
    const id = req.params.id;
    await Actif.findByIdAndDelete(id);
    res.status(200).json({ message: "Actif supprimée avec succès" });
};

const Singledata =async(req,res)=>{
    const id = req.params.id
    const data = await Actif.findOne({ _id: id })
    res.json(data)
}


module.exports ={create,update,deleted,list,Singledata}