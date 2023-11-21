
const createUser = (req,res) => {
    res.send("Welcome to CREATE USER API.")
    
}

const loginUser = (req,res) => {
    res.send("Welcome to LOGIN USER API.")
}

module.exports = {
    createUser,loginUser
}