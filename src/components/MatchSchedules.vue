<template>
  <div>
    <p>matchSchedule</p>
    <button v-on:click="loadJSON">Load File</button>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "match",
  methods: {
    loadJSON() {
      axios.defaults.withCredentials = true;
      axios
        .get(
          "https://api.sportradar.us/cricket-t2/en/tours.json?api_key=vtfkm99u2e2shq6r8y2wvpmt"
        )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });

      //   fetch(
      //     "https://api.sportradar.us/cricket-t2/en/tours.json?api_key=vtfkm99u2e2shq6r8y2wvpmt",
      //     {
      //       method: "get"
      //     }
      //   )
      //     .then(res => res.json())
      //     .then(data => {
      //       console.log(data);
      //     })
      //     .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>


