const express = require('express')

const router = express.Router();

router.get("/login", async(req, res) => {

    let email = req.body.email;
    let password = req.body.password;

    res.sendStatus(200);
})

router.post("/reset", async(req, res) => {
    res.sendStatus(200);
})

router.post("/reset-confirm", async(req, res) => {
    res.sendStatus(200);
})

module.exports = router;