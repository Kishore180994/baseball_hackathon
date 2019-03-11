<template>
  <div>
    <p>matchSchedule</p>
    <button v-on:click="loadJSON">Load File</button>
    {{info}}
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "match",
  data() {
    return {
      info: ""
    };
  },
  methods: {
    async loadJSON() {
      const config = {
        headers: {
          //   "Access-Control-Allow-Origin": "*",
          Accept: "application/json"
        }
      };
      const url = "http://localhost:3000";

      const d = await axios.get(url, config);
      this.info = d.data;
    }
  }
};
</script>

<style>
</style>


