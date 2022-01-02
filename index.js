// let express = require('express')
// let app = express()
let port = 3000
let app = require('./app')
let multer = require('multer')
var upload = multer({
    dest: "./uploads",
    limits: {
        fileSize: 15000000
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
});


app.set('view engine', 'ejs');
app.get("/", (req, res) => {
    res.render('index');
});
app.post("/", upload.fields([
    { name: 'avater1', maxCount: 1 },
    { name: 'avater2', maxCount: 2 }
]), (req, res) => {
    res.send('uploaded');
})

app.use((err, req, res, next) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            res.send('upload error!!!');
        } else {
            res.status(500).send(err.massage);
        }
        // res.status(500).send(err.massage);
    } else {
        res.send('success');
    }
});




// app.use((err, req, res, next) => {
//     if (res.headerSent) {
//         next('there was an problem');
//     } else {
//         if (err.massage) {
//             res.status(500).send(err.massage);
//         } else {
//             res.send('there was an errorrrr');
//         }
//     }
// });

app.listen((process.env.port || port), () => {
    console.log(`server is running at port http://localhost:${3000}`);
});