const User = require('../model/user')

const getAllUsers = async (req, res) => {
    try{
        const user = await User.find();
        res.status(200).json({
            success: true,
            msg:"data fetched successfully",
            data: user
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            msg: err.message
        })
    }
}

module.exports = getAllUsers;