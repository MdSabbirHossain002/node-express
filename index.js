// let express = require('express')
// let app = express()
let port = 3000
let app = require('./app')






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

app.listen((port), () => {
    console.log(`server is running at port http://localhost:${3000}`);
});
// app.listen((process.env.port || port), () => {
//     console.log(`server is running at port http://localhost:${3000}`);
// });