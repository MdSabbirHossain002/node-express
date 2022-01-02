let express = require("express")
let app = express()
let userRouter = require('./routers/users.router')
let mongooseRouter = require('./routers/mongoose.router')
app.use("/", mongooseRouter)


module.exports = app;