<template>
 <div>
  <p>Team Profile..</p>
  <form>
  <input type="text" name="search" placeholder="Search..">
</form>
 </div>
</template>

<script>
export default {
  name: "team"
};
</script>

<style>
input[type=text] {
  width: 130px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-image: url('https://cdn1.iconfinder.com/data/icons/MetroStation-PNG/252/MB__search.png');
  background-size: 4%;
  background-position: right; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition: width 0.3s ease-in-out;
  transition: width 0.3s ease-in-out;
}

input[type=text]:focus {
  width: 50%;
}
</style>


