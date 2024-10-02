
const router = require("express").Router()
const { create, update, deleted, list,sendEmail, Singledata } = require("../controller/UserController")



router.post("/create", create);
router.put("/update/:id",update)
router.delete("/delete/:id",deleted)
router.get("/list",list)
router.post("/send-email",sendEmail)
router.get("/:id",Singledata)




module.exports = router