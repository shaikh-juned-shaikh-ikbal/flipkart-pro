const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://sheikhjuned770:y7wT1rQNSOUtPgjR@flipkart-pro.r8p15uo.mongodb.net/?retryWrites=true&w=majorityzzMm33tJ9oM1FeSh";

const connectDatabase = () => {
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected ");
        });
}

module.exports = connectDatabase;