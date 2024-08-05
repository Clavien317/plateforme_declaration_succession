
const router = require("express").Router()
const { create, update, deleted, list, Singledata } = require("../controller/UserController")



router.post("/create", create);
router.put("/update/:id",update)
router.delete("/delete/:id",deleted)
router.get("/list",list)
router.get("/:id",Singledata)




module.exports = router