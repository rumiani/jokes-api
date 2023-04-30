const mongoose = require('mongoose')

const jokeSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true,
        trim: true
    }
},{
    timestamps:true
})

const Joke = mongoose.model('jokes', jokeSchema)
module.exports = Joke 