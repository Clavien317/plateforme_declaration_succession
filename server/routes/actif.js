
const router = require("express").Router()
const { create, update, deleted, list, Singledata, listSpec } = require("../controller/ActifController")



router.post("/create", create);
router.put("/update/:id",update)
router.delete("/delete/:id",deleted)
router.get("/list",list)
router.get("/list/:id",listSpec)
router.get("/:id",Singledata)




module.exports = router