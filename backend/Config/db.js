require('dotenv').config();
const mongoose = require('mongoose');

const connection = () =>{
    mongoose.connect(process.env.MONGODB_URL).then(() =>{
        console.log({msg : "Connection Successfully!"});
    }).catch((error) =>{
        console.log({msg : "Connection Failed!"})
    })
}
mongoose.set(`strictQuery`, false);

module.exports = {
    connection
}