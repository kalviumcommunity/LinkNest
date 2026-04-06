const Link = require("../models/linkModel");
//Controller is the business logic of the application. It handles the requests and responses. 
// It interacts with the database and performs the necessary operations.
const getAllLinks = async (req, res) => {
    //req is the request object that contains information about the HTTP request, such as query parameters, body data, headers, etc.
    //res is the response object that is used to send a response back to the client. It has methods like res.status() to set the 
    //HTTP status code and res.json() to send a JSON response.
    try {
        const links = await Link.find().sort({ createdAt: -1 });
        //Link.find() is a Mongoose method that retrieves all documents from the Link collection in the MongoDB database. 
        // The .sort({ createdAt: -1 }) part sorts the retrieved links in descending order based on their createdAt field, 
        // meaning the most recently created links will appear first in the response.
        res.status(200).json({
            success: true,
            count: links.length,
            //links.length is the number of links retrieved from the database, which is included in the response to provide
            // information about how many links are being returned.
            data: links
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = { getAllLinks };