const User = require('../model/user')

const createUser = async (req, res) => {
    const {name, title, dept, email, role} = req.body
    const imgUrl = `https://api.dicebear.com/5.x/initials/svg?seed=${name}`;
    const newUser = new User({
        name,
        title,
        email,
        dept,
        role,
        img: imgUrl
    });
    try{
        await newUser.save();
        res.status(200).json({
            success: true,
            msg: "User created successfully",
            data: newUser
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            msg: err.message
        })
    }
}

module.exports = createUser;