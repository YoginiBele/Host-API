// const mongoose =  require("mongoose");

// const quotesSchema =  new mongoose.Schema({
//     author:{
//         type: String,
//         required: [true, "auhtor name must be provided"]
//     },
//     quotes:{
//         type: String,
//         required: true,
//     },
// });
// module.exports = mongoose.model('Quote', quotesSchema);

const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
    author:{
        type: String,
        required: true,
    },
    quote: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Author", QuoteSchema );