const Users = require("../model/userModel")
const bcrypt = require("bcrypt")

const createUser = async (req,res) => {
    // step 1 : Check if data is coming or not
    console.log(req.body);

    // step 2 : Destructure the data
    const { firstName, lastName, email, password } = req.body;

    // step 3 : validate the incomming data
    if(!firstName || !lastName || !email || !password){
        return res.status(400).json("Please enter all fields.")
    }

    // step 4 : try catch block
    try {
        // step 5 : Check existing user
        const existingUser = await Users.findOne({email: email})
        if(existingUser){
            return res.status(400).json("User already exists.")
        }

        // password encryption
        const randomSalt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(password,randomSalt)

        // step 6 : create new user
        const newUser = new Users({
            // fieldname : incomming data name
            firstName : firstName,
            lastName : lastName,
            email : email,
            password : encryptedPassword,
        })

        // step 7 : save user and response
        await newUser.save();
        res.status(200).json("User created successfully.")

        
    } catch (error) {
        console.log(error);
        res.status(500).json("Server Error")
    }

    
}

const loginUser = (req,res) => {
    res.send("Welcome to LOGIN USER API.")
}

module.exports = {
    createUser,loginUser
}