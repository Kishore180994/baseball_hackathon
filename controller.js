'use strict'
const Qs = require('querystring'),
    axios = require('axios'),
    parseString = require('xml2js').parseString;
var convert = require('xml-js');
exports.getSchedule = (req, res) => {
    // console.log(req.body.username);
    const matchScheduleUrl = "http://api.sportradar.us/cricket-t2/en/schedules/2019-02-01/schedule.json?api_key=vtfkm99u2e2shq6r8y2wvpmt";
    axios.post(matchScheduleUrl, Qs.stringify({
        'function': 'getEvents'
    }), {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(response => {
            res.send(response.data);
        }).catch(err => {
            res.send(err);
        })
}

exports.postdate = (req, res) => {

    const matchScheduleUrl = "http://api.sportradar.us/cricket-t2/en/schedules/" + req.body.username + "/schedule.json?api_key=vtfkm99u2e2shq6r8y2wvpmt";
    console.log(matchScheduleUrl);
    axios.post(matchScheduleUrl, Qs.stringify({
        'function': 'getEvents'
    }), {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(response => {
            res.send(response.data);
        }).catch(err => {
            res.send("err");
        })
}
exports.getPlayers = (req, res) => {
    let teamId = req.body.id;
    // let testId = "sr:player:617284";
    const teamlink = "http://api.sportradar.us/cricket-t2/en/teams/" + teamId + "/profile.json?api_key=vtfkm99u2e2shq6r8y2wvpmt";
    axios.post(teamlink, Qs.stringify({
        'function': 'getEvents'
    }), {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(response => {
            res.send(response.data);
        }).catch(err => {
            res.send("err");
        })

}
exports.getPlayerInfo = (req, res) => {
    let playerId = req.body.id;
    const url = "http://api.sportradar.us/cricket-t2/en/players/" + playerId + "/profile.json?api_key=vtfkm99u2e2shq6r8y2wvpmt";
    axios.post(url, Qs.stringify({
        'function': 'getEvents'
    }), {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            // console.log(response.data);
            res.send(response.data);
        }, function (error) {
            console.log(error);
        })
}
exports.getTeams = (req, res) => {
    const url = "http://api.sportradar.us/cricket-t2/en/tournaments/sr:tournament:2474/info.json?api_key=vtfkm99u2e2shq6r8y2wvpmt";
    axios.post(url, Qs.stringify({
        'function': 'getEvents'
    }), {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            // console.log(response.data);
            res.send(response.data);
        }, function (error) {
            console.log(error);
        })
}

exports.getBasic = (req, res) => {
    axios.post("http://api.sportradar.us/cricket-t2/en/tours.json?api_key=vtfkm99u2e2shq6r8y2wvpmt", Qs.stringify({
        'function': 'getEvents'
    }), {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            // console.log(response.data);
            res.send(response.data);
        }, function (error) {
            console.log(error);
        })
}