
const router = require("express").Router()
const { createDeclaration, update, deleted, list, Singledata } = require("../controller/DeclarationController")



router.post("/create", createDeclaration);
router.put("/update/:id",update)
router.delete("/delete/:id",deleted)
router.get("/list",list)
router.get("/:id",Singledata)




module.exports = router