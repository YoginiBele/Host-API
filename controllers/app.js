require("dotenv").config();
const express = require ("express");
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

const  quotes_routes = require("./routes/quotes")

app.get("/", (req, res) =>{
  res.send("hello,here");
});

app.use("/api/quotes", quotes_routes);

const start = async () => {
  try{
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () =>{
      console.log(`${PORT} yahuuu connect`);
    });
  }catch(error){
    console.log(error);
  }
};

start();