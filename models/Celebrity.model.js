const { Schema, model } = require("mongoose");

const celibritySchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },   
    catchPhrase: {
        type: String,
        required: true,
    }
})

const Celebrity = model("Celebrity", celibritySchema);
module.exports = Celebrity;