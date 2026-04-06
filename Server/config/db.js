const mongoose = require("mongoose");
//mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
//It provides a straightforward, schema-based solution to model application data. 
//It includes built-in type casting, validation, query building, business logic hooks and more,
//out of the box.
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/linkdb");
        console.log("MongoDB Connected on localhost");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;