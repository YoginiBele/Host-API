require("dotenv").config();
const connectDB = require("./db/connect");
const Quote = require("./models/quote");

const QuotesJson =  require("./quotes.json");

const start =  async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        await Quote.create(QuotesJson);
        await Quote.deleteMany();
        console.log("sucesss");
    }
    catch(error){
        console.log(error);
    }
};

start();