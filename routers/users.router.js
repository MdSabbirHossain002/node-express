let express = require("express")
let router = express.Router()
    // get, post, put, delete


router.get("/login", (req, res) => {
    res.send('login');
    res.sendFile('/views/index.ejs'); //html,text,json

});
router.get("/register", (req, res) => {
    res.status(200).json({
        massage: 'this is register page via stutus code 200 as json file',
        status: 200,
    });

    // res.redirect('/api/user/login');

});

module.exports = router;