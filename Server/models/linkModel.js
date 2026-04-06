const mongoose = require("mongoose");
//It is a schema for the Link model. 
// It defines the structure of the Link document in the MongoDB database. 
// It has three fields: title, url and createdAt.
// The title and url fields are required and the createdAt field has a default value of the current date and time.
const linkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Link", linkSchema);