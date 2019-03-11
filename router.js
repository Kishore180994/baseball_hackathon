'use strict';

//Creating the module/ function for maintaining routes
module.exports = (app) => {

    var reqList = require('./controller');

    //Get the CRUD methods of users from userController
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.route('/')
        .get(reqList.getBasic)

    app.route('/schedule')
        .post(reqList.postdate)

    app.route('/teamslist')
        .get(reqList.getTeams)

    app.route('/playerlist')
        .post(reqList.getPlayers)

    app.route('/playerInfo')
        .post(reqList.getPlayerInfo)
}