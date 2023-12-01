const { sign } = require('jsonwebtoken')
const express = require('express')

const router = express.Router();

router.get("/login", async(req, res) => {

    let email = req.body.email;
    let password = req.body.password;

    let user = await req.app.get("sequelize").models.User.findOne({
        where: {
            email: email,
            password: password
        }
    })

    if (!user) {
        res.status(403).json({error: "Unathorized" })
    }

    const token = sign({ email: user.email }, config.secret);

    res.send({
        token: token,
        admin: user.admin
    });
})

router.post("/reset", async(req, res) => {
    res.sendStatus(200);
})

router.post("/reset-confirm", async(req, res) => {
    res.sendStatus(200);
})

module.exports = router;