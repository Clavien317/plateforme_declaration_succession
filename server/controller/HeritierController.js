const Heritier = require("../model/Heritier")



const create = async (req, res) => {
    const { userId,dossierNum, nom, declarationId, datenaiss,relation } = req.body;
  
    try {
      const newHeritier = await Heritier.create({
        nom:nom,
        userId:userId,
        datenaiss:datenaiss,
        relation: relation,
        declarationId: "j...jkhiuh",
        dossierNum:dossierNum,
      })

      res.status(201).json({ message: "Insertion des Heritiers réussie",data:{newHeritier} });
    } catch (error) {
      console.error("Erreur lors de l'insertion", error);
      res.status(500).json({ message: "Erreur serveur lors de l'insertion" });
    }
  }

const list=async(req,res)=>{
    const data = await Heritier.find()
    res.json(data)
}

const listSpec = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Heritier.find({ userId:id });
        if (data.length === 0){
            return res.status(404).json({ message: 'Aucun heritier trouvé pour ce idUser.' });
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
        const updatedHeritier = await Heritier.findByIdAndUpdate(id, data, { new: true, runValidators: true });
        if (updatedHeritier) {
            res.json({
                message: "Heritier modifiée avec succès",
                Heritier: updatedHeritier
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
    await Heritier.findByIdAndDelete(id);
    res.status(200).json({ message: "Heritier supprimée avec succès" });
};

const Singledata =async(req,res)=>{
    const id = req.params.id
    const data = await Heritier.findOne({ _id: id })
    res.json(data)
}


module.exports ={create,update,deleted,list,listSpec,Singledata}