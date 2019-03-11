const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')
const bodyParser = require('body-parser')
const Qs = require('querystring');

const cors = require('cors')
const logger = require('./middleware/logger');


const corsOptions = {
    origin: 'http://localhost:8081',
    credentials: true
}
app.use(cors(corsOptions));

//Using body parser for express
//Support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({
    extended: true
}));

//Supports parsing of application/json type post data
app.use(bodyParser.json());

//Init middleware
// app.use(logger);

// app.get('/', (req, res) => {
//     // res.send("Hello world");
//     axios.post(url, Qs.stringify({
//         'function': 'getEvents'
//     }), {
//             withCredentials: true,
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         }).then(function (response) {
//             // console.log(response.data);
//             res.send(response.data);
//         }, function (error) {
//             console.log(error);
//         })
// })

var routes = require('./router');
routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))