


const router = require("../routes/quotes");
const Quote = require("../models/quote");

const getAllQuotes = async (req, res) => {
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 5;
    let skip = (page - 1) * limit;

    try {
        const myData = await Quote.find({}).skip(skip).limit(limit);
        res.status(200).json({ myData });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

const getAllQuotesTesting = async (req, res) => {
    try {
        const myData = await Quote.find(req.query);
        console.log(" ~ file: quotes.js ~ line 10 ~ getAllQuotes ~ req.query", req.query);
        res.status(200).json({ myData });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { getAllQuotes, getAllQuotesTesting };
