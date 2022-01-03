let express = require("express")
let app = express()
let usersRouter = require('./routers/users.route')
let mongodbRouter = require('./routers/mongodb.route')
let multerRouter = require('./routers/multer.route')

app.set('view engine', 'ejs');
app.use("/", multerRouter);
app.use("/", usersRouter);
app.use("/", mongodbRouter);




module.exports = app;