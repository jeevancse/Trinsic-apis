const mongoose = require('mongoose')




var uri = "mongodb://localhost:27017/TRINSIC"
mongoose.set("useNewUrlParser", true)
mongoose.connect(uri, { useUnifiedTopology: true ,  useCreateIndex: true})
mongoose.connection.once('open', function () {
    console.log("Connection has been made Successfully...")
}).on('error', function (error) {

    console.log("error is :", error)
})

