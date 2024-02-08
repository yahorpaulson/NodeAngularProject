const User = require('../models/User')




module.exports.login = function(req,res){
    res.status(200).json({
        login: {
            email: req.body.email,
            password: req.body.password
        }
    })
}

module.exports.register = async function(req, res) {
    const candidate = await User.findOne({email: req.body.email})

    if (candidate){
        //user exists. error
        res.status(409).json({                  //conflict http status
            message: 'Email already exists'
        })
    } else{
        //create user
    }
}