
const router = require("express").Router()
const { createDeclaration, update, deleted, list, Singledata, listSpec } = require("../controller/DeclarationController")



router.post("/create", createDeclaration);
router.put("/update/:id",update)
router.delete("/delete/:id",deleted)
router.get("/list",list)
router.get("/list/:id_user",listSpec)
router.get("/:id",Singledata)




module.exports = router