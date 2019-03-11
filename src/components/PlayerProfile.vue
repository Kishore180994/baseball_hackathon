<template>
  <div>
    <p>PlayerProfile</p>
    <select v-model="selected" v-on:change="getPlayers">
      <option value disabled selected>Select country</option>
      <option
        v-for="option in teamOptions"
        v-bind:key="option.id"
        v-bind:value="{id: option.id, text:option.name}"
      >{{ option.name }}</option>
    </select>
    <span>Selected: {{ selected.text }}</span>
    <div>
      <select v-model="selectPlayer" v-on:change="getPlayerInfo">
        <option value disabled selected>Select Players</option>
        <option
          v-for="option in playerOptions"
          v-bind:key="option.id"
          v-bind:value="{id: option.id, text:option.name}"
        >{{ option.name }}</option>
      </select>
      <span>Selected: {{ selectPlayer.text }}</span>
    </div>
    <span>
      <button @click="showData('test')">Test</button>
      <button @click="showData('odi')">ODI</button>
      <button @click="showData('t20i')">T20I</button>
      <button @click="showData('fc')">First Class</button>
      <button @click="showData('la')">List A</button>
      <button @click="showData('t20')">T20</button>
    </span>
    <table id="batting" v-if="showTable">
      <thead>
        <tr>
          <th>Batting</th>
        </tr>
        <tr>
          <th>Matches</th>
          <th>Innings</th>
          <th>Balls Faced</th>
          <th>Not Outs</th>
          <th>Runs</th>
          <th>Average</th>
          <th>Strike Rate</th>
          <th>Highest Score</th>
          <th>100's</th>
          <th>50's</th>
          <th>4's</th>
          <th>6's</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{selectedData.batting.matches}}</td>
          <td>{{selectedData.batting.innings}}</td>
          <td>{{selectedData.batting.balls_faced}}</td>
          <td>{{selectedData.batting.not_outs}}</td>
          <td>{{selectedData.batting.runs}}</td>
          <td>{{selectedData.batting.average}}</td>
          <td>{{selectedData.batting.strike_rate}}</td>
          <td>{{selectedData.batting.highest_score}}</td>
          <td>{{selectedData.batting.hundreds}}</td>
          <td>{{selectedData.batting.fifties}}</td>
          <td>{{selectedData.batting.fours}}</td>
          <td>{{selectedData.batting.sixes}}</td>
        </tr>
      </tbody>
    </table>

    <table id="bowling" v-if="showTable">
      <thead>
        <tr>
          <th>Bowling</th>
        </tr>
        <tr>
          <th>Matches</th>
          <th>Innings</th>
          <th>Overs</th>
          <th>Balls Bowled</th>
          <th>Maidens</th>
          <th>Runs</th>
          <th>Wickets</th>
          <th>Average</th>
          <th>Strike_Rate</th>
          <th>Economy</th>
          <th>Best Bowling</th>
          <th>4 Wicket haul</th>
          <th>5 Wicket haul</th>
          <th>10 Wicket haul</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{selectedData.bowling.matches}}</td>
          <td>{{selectedData.bowling.innings}}</td>
          <td>{{selectedData.bowling.overs}}</td>
          <td>{{selectedData.bowling.balls_bowled}}</td>
          <td>{{selectedData.bowling.maidens}}</td>
          <td>{{selectedData.bowling.runs}}</td>
          <td>{{selectedData.bowling.wickets}}</td>
          <td>{{selectedData.bowling.average}}</td>
          <td>{{selectedData.bowling.strike_rate}}</td>
          <td>{{selectedData.bowling.economy}}</td>
          <td>{{selectedData.bowling.best_bowling}}</td>
          <td>{{selectedData.bowling.four_wicket_hauls}}</td>
          <td>{{selectedData.bowling.five_wicket_hauls}}</td>
          <td>{{selectedData.bowling.ten_wicket_hauls}}</td>
        </tr>
      </tbody>
    </table>

    <table id="fielding" v-if="showTable">
      <thead>
        <tr>
          <th>Fielding</th>
        </tr>
        <tr>
          <th>Catches</th>
          <th>Stumpings</th>
          <th>Run-outs</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{selectedData.fielding.catches}}</td>
          <td>{{selectedData.fielding.stumpings}}</td>
          <td>{{selectedData.fielding.runouts}}</td>
        </tr>
      </tbody>
    </table>
    <!-- <div>{{selectedData}}</div> -->
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "player",
  data() {
    return {
      teamOptions: [],
      playerOptions: [],
      selected: "",
      selectPlayer: "",
      playerInfo: "",
      testData: [],
      odiData: [],
      t20iData: [],
      firstclassData: [],
      listaData: [],
      T20Data: [],
      selectedData: []
    };
  },
  computed: {
    showTable() {
      if (this.selectedData == "") return false;
      else return true;
    }
  },
  created: {
    checkSelected() {
      return this.playerOptions;
    }
  },
  mounted() {
    var data = [];
    axios
      .get("http://localhost:3000/teamslist")
      .then(res => {
        var filtered = res.data.groups[0].teams;
        for (var i = 0; i < filtered.length; i++) {
          data.push(filtered[i]);
        }
      })
      .catch(err => {
        console.log(err);
      });
    this.teamOptions = data;
  },
  methods: {
    showData(x) {
      switch (x) {
        case "test":
          this.selectedData = this.testData;
          break;
        case "odi":
          this.selectedData = this.odiData;
          break;
        case "t20i":
          this.selectedData = this.t20iData;
          break;
        case "fc":
          this.selectedData = this.firstclassData;
          break;
        case "la":
          this.selectedData = this.listaData;
          break;
        case "t20":
          this.selectedData = this.T20Data;
          break;
        default:
          this.selectedData = this.testData;
          break;
      }
    },
    getPlayers: function() {
      console.log(this.selected);
      let teamId = {
        id: this.selected.id
      };
      axios
        .post("http://localhost:3000/playerlist", teamId)
        .then(res => {
          let players = res.data.players;
          this.playerOptions = players;
        })
        .catch(err => {
          console.log(err);
        });
    },

    getPlayerInfo() {
      console.log(this.selectPlayer);
      let playerId = {
        id: this.selectPlayer.id
      };
      axios
        .post("http://localhost:3000/playerInfo", playerId)
        .then(res => {
          this.playerInfo = res.data.statistics;
          this.testData = this.playerInfo.tournaments[0];
          this.odiData = this.playerInfo.tournaments[1];
          this.t20iData = this.playerInfo.tournaments[2];
          this.firstclassData = this.playerInfo.tournaments[3];
          this.listaData = this.playerInfo.tournaments[4];
          this.T20Data = this.playerInfo.tournaments[5];
          console.log(this.testData);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style>
</style>


