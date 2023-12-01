const { verify } = require('jsonwebtoken')
const config = require('../config')


const auth = async (req, res, next) => {
    
    let header = req.headers.authorization;

    if (!header) {
        return res.status(403).json({error: "Missing authorization header"})
    }

    let token = header.split(' ')[1];

    try {
        let payload = verify(token, config.secret)
        
        let user = await req.app.get("sequelize").models.User.findOne({
            where: {
                email: payload.email
            }
        })
       
        if (!user) {
            return res.status(403).json({error: "Unauthorized"})
        }

        return next()
    }
    catch (error) {
        return res.status(401).json({error: "Missing token"})
    }
		
}

module.exports = auth;