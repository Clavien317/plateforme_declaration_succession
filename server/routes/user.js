
const router = require("express").Router()
const { create, update, deleted, list,sendEmail, Singledata, login, verifier, verifyJwt, Informer } = require("../controller/UserController")



router.post("/create", create);
router.put("/update/:id",update)
router.delete("/delete/:id",deleted)
router.get("/list",list)
router.post("/send-email",sendEmail)
router.post("/informer",Informer)

router.get("/:id",Singledata)
router.post("/login",login)
router.post("/verifyAuth",verifier,verifyJwt)





module.exports = router