<template>
  <div>
    <datepicker :format="customFormatter"></datepicker>
    <button @click="updateData">Get Data</button>
    <table id="datatable">
      <thead>
        <tr>
          <th>Team A</th>
          <th>Team B</th>
          <th>Tournament</th>
          <th>Match Time</th>
          <th>Venue</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="team in finalformat" v-bind:key="team.id">
          <td>{{team.team1.name}}</td>
          <td>{{team.team2.name}}</td>
          <td>{{team.Tournamentname}}</td>
          <td>{{team.matchtime}}</td>
          <td>{{team.venue.name}},{{team.venue.city}},{{team.venue.country}}</td>
        </tr>
      </tbody>
    </table>
    <!-- <div v-for="teams in finalformat" v-bind:key="teams.id">{{teams.matchtime}}</div> -->
  </div>
</template>


<script>
import moment from "moment";
const axios = require("axios");
import Datepicker from "vuejs-datepicker";
export default {
  name: "Daily",
  data() {
    return {
      date1: "",
      info: "",
      finalformat: [],
      formatted: []
    };
  },
  components: {
    Datepicker
  },
  computed: {
    computedData() {
      return this.formatted;
    }
  },
  methods: {
    updateData() {
      if (this.formatted != "") this.finalformat = this.formatted;
      else alert("Select the date");
      this.formatted = [];
    },
    customFormatter(date) {
      // console.log(this.test_data);
      this.date1 = moment(date).format("YYYY-MM-DD");
      let user = {
        username: this.date1
      };

      axios
        .post("http://localhost:3000/schedule", user)
        .then(res => {
          this.info = res.data.sport_events;
          console.log(this.info);
          for (var i = 0; i < this.info.length; i++) {
            // console.log(this.competitors[i]);
            this.formatted[i] = {
              matchid: this.info[i].id,
              matchtime: this.info[i].scheduled,
              Tournamentname: this.info[i].tournament.name,
              venue: {
                name: this.info[i].venue.name,
                city: this.info[i].venue.city_name,
                country: this.info[i].venue.country_name
              },
              team1: this.info[i].competitors[0],
              team2: this.info[i].competitors[1]
            };
          }

          // console.log(this.formatted);
          // computedData(this.formatted);
        })
        .catch(err => {
          console.log(err);
        });
      return moment(date).format("MM Do YYYY");
    }
  }
};
</script>

<style>
</style>


