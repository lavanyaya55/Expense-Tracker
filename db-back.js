//Connecting mongoose to mongoDb 

const mongoose = require('mongoose');

const db = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Db Connected')
    } catch (error) {
        console.log('Db Connection Error');
    }
    }

module.exports = {db}
