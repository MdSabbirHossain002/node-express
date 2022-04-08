// let express = require('express')
// let app = express()
let port = process.env.PORT || 3000
let app = require('./app')


app.use('/',(req.res)=>{ 
    res.send('there was an errorrrr')
});
//         






app.listen((port), () => {
    console.log(`server is running at port http://localhost:${3000}`);
});
// app.listen((process.env.port || port), () => {
//     console.log(`server is running at port http://localhost:${3000}`);
// });
