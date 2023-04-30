const express = require('express')
const {ObjectId} = require('mongodb')
const Joke = require('../models/joke')
const router = new express.Router()

router.get('/:id', async (req, res) =>{
    const id = req.params.id
    let jokes;
    try {
        if(ObjectId.isValid(id)){
            jokes = await Joke.findById(id)
            res.send({jokes})   
        }
        else if (id > 0 && id <= 10){
            jokes = await Joke.aggregate().sample(+id)
            res.send({jokes})
        }
        else {
            res.status(400).send({error:'Invalid params id. Only 12-byte object id or a numbers between 1-10 are acceptable'})
        }
    } catch (error) {
        res.status(500).send({error:'Internal Server Error'})
    }
})

router.get('/', (req, res) => {
    res.status(404).send({Tip:'Add an id or a number to the url and hit enter to see the result. Example: url/5'})
})

module.exports = router