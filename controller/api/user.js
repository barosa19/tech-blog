const router = require("express").Router
const User = require("../../models/")

router.get("/", async (req, res) => {
    const UserData = await User.findAll({ where: })
})

router.get("/:id", async (req, res) => {

})

router.post("/", async (req, res) => {

})

router.put("/:id", async (req, res) => {

})

router.delete("/:id", async (req, res) => {

})
module.exports = router