const app = require("./app")
const port = process.env.PORT
const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
}).then(()=> {
    app.listen(port, () => console.log("Server is up on port " + port))
    console.log("Connected to DB")})

