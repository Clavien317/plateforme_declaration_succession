const Actif = require("../model/Actif")



const create = async (req, res) => {
    const { beneficiaire,userId,dossierNum, biens, description, valeur } = req.body;
    try {
      const newActif = await Actif.create({
        userId:userId,
        biens:biens,
        taxe:biens*0.05,
        description: description,
        valeur: valeur,
        declarationId: "j...jkhiuh",
        dossierNum:dossierNum,
        beneficiaire:beneficiaire||"xxxxxxxxxxx"
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

const listSpec = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Actif.find({userId:id});
        if (data.length === 0) {
            return res.status(404).json({ message: 'Aucun actif trouvé pour ce dossierNum.' });
        }
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
  }

  const listSpec2 = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Actif.find({dossierNum:id});
        if (data.length === 0) {
            return res.status(404).json({ message: 'Aucun actif trouvé pour ce dossierNum.' });
        }
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
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


module.exports ={create,update,deleted,list,listSpec,Singledata,listSpec2}