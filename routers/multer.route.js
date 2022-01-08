let express = require("express")
let router = express.Router()
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


//router.set('view engine', 'ejs');
router.get("/", (req, res) => {
    res.render('index');
});
router.post("/", upload.fields([
    { name: 'avater1', maxCount: 1 },
    { name: 'avater2', maxCount: 2 }
]), (req, res) => {
    res.send('uploaded');
})

router.use((err, req, res, next) => {
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
module.exports = router;