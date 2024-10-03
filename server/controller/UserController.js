const Utilisateur = require("../model/Utilisateurs")
const bcrypt = require("bcrypt")
const nodemailer = require("nodemailer")
const jwt = require("jsonwebtoken")


const create = async (req, res) => {
    const { nom, email,tel, password } = req.body
    if (!nom || !tel || !password) {
        return res.status(400).json("La nom_Utilisateur, le tel et le password sont requis")
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 12)
        const role = "utilisateur"
        await Utilisateur.create({ nom,tel, email,role, password: hashedPassword })
        res.json("Insertion réussie")
    } catch (error)
    {
        console.error(error)
        res.status(500).json("Erreur serveur lors de l'insertion")
        res.json("Erreur serveur lors de l'insertion")
    }
}



const login=async(req,res)=>
{
    const { nif, password } = req.body;
    try {
        const utilisateur = await Utilisateur.findOne({ nif });
        if (!utilisateur)
        {
            return res.json({message:"nif n'existe pas",status:401});
        }
        else
        {
            const id = utilisateur._id;
            const passwordMatch = await bcrypt.compare(password, utilisateur.password);
            if (!passwordMatch) {
                return res.json({message:"Mot de passe invalide",status:401});
            }
            else
            {
                const token = jwt.sign({ id: utilisateur._id }, "jwtSecretKey", { expiresIn: 300 });
                res.status(200).json({ result: "Connexion réussie", login: true, token, utilisateur,id });
            }
        }
    } catch (error) {
        res.json({status:500,message:"Erreur lors de la connexion : " + error.message});
    }
}
    
const verifyJwt =(req,res,next)=>
{
    const token = req.headers["access-token"]
    if(!token)
    {
        return res.json("Nous avons besoin de token")
    }else
    {
        jwt.verify(token,"jwtSecretKey",(err,decoded)=>
        {
            if(err)
            {
                res.json("Non authentifiee")
            }else
            {
                req.userId = decoded.id
                console.log(req.userId);
                next()
            }
        })
    }
}

const verifier=(req,res)=>
{
    res.header('Access-Control-Allow-Origin', '*')
    return res.json("Authentified")
}

const list=async(req,res)=>{
    const data = await Utilisateur.find()
    res.json(data)
}

const update=async(req,res)=>{
    const id = req.params.id;
    const data = req.body
    // sendEmail()
    if (!id || !data) {
        return res.status(400).json("Données invalides");
    }

    try {
        const updatedUtilisateur = await Utilisateur.findByIdAndUpdate(id, data, { new: true, runValidators: true });
        if (updatedUtilisateur) {
            res.json({
                message: "Utilisateur modifiée avec succès",
                Utilisateur: updatedUtilisateur
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
    await Utilisateur.findByIdAndDelete(id);
    res.status(200).json({ message: "Utilisateur supprimée avec succès" });
};

const Singledata =async(req,res)=>{
    const id = req.params.id
    const data = await Utilisateur.findOne({ _id: id })
    res.json(data)
}



const sendEmail = async (req, res) => {
    const id = req.params.id;
    try {
      const utilisateur = await Utilisateur.findById(id);
      if (!utilisateur) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }
  
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_ADMIN,
          pass: process.env.EMAIL_PWD,
        },
      });
  
      const mailOptions = {
        from: process.env.EMAIL_ADMIN,
        to: utilisateur.email,
        subject: "Confirmation de compte",
        text: `Bonjour ${utilisateur.nom},\n\nVotre compte a été confirmé avec succès.\n\nCordialement,\nL'équipe.`,
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Erreur lors de l'envoi de l'email :", error);
          return res.status(500).json({ message: "Erreur lors de l'envoi de l'email" });
        } else {
          res.json({ message: "Email envoyé avec succès" });
        }
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  };

module.exports ={create,update,deleted,list,Singledata,sendEmail,verifyJwt,verifier,login}
