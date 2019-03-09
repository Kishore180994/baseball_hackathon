<template>
  <div>
    <ul>
      <li>
        <router-link to="./" tag="a" router-link-active class="Button">Daily Schedule</router-link>
      </li>
      <li>
        <router-link to="./match" tag="a" router-link-active class="Button">Match Details</router-link>
      </li>
      <li>
        <router-link to="./player" tag="a" router-link-active class="Button">Player Profile</router-link>
      </li>
      <li>
        <router-link to="./team" tag="a" router-link-active class="Button">Team profile</router-link>
      </li>
      <!-- <i class="fas fa-home fa-2x" @click="homepage"></i> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    homepage() {
      this.$router.push({ name: "Header" });
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: black;
}

li {
  float: left;
}

i {
  float: right;
  color: aliceblue;
  margin-top: 0.5%;
  margin-right: 0.4%;
}

i:hover {
  color: indianred;
  cursor: pointer;
}

i:focus {
  color: indianred;
}

i:active {
  color: aliceblue;
}
li a:hover,
li a.router-link-exact-active {
  background-color: indianred;
  cursor: pointer;
  text-decoration: none;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.red {
  background: red;
}

.green {
  background: #4caf50;
}

.active {
  background-color: #4caf50;
}
</style>
