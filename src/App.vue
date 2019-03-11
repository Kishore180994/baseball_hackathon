<template>
  <div id="app">
    <h1>Hackathon - Base Ball Hack Day</h1>
    <NavBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import * as d3 from "d3";

import NavBar from "./components/NavBar.vue";
export default {
  name: "app",
  components: {
    NavBar
  },
  data() {
    return {
      loadData: []
    };
  },
  mounted() {
    console.log("App Loaded");
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let data = await d3.json("./tweets.json");
      this.loadData = data;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
