const User = require('../model/user')

const deleteUser = async (req, res) => {
    try {
        const {userId} = req.params

        const user = await User.findById(userId)
        // console.log(user)
        if(!user){
            res.status(400).json({
                success: false,
                msg: "User not found"
            })
        }
        await User.findByIdAndDelete(userId)
        res.status(200).json({
            success: true,
            msg: "Deleted Successfully"
        })
        
    } catch (error) {   
        res.status(500).json({
            success: false,
            msg: error
        })
    }
}

module.exports = deleteUser