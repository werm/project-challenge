<template>
  <div>
    <p>{{ message }}</p>
    <div class="row">
      <div class="col-sm" v-for="(dog, i) in dogs" :key="i">
        <dog-profile :info="dog" />
      </div>
    </div>
  </div>
</template>

<script>
import DogProfile from './DogProfile';

export default {
  name: 'Home',
  components: {
    DogProfile
  },
  data() {
    return {
      message: "Ya like dags?",
      dogs: []
    }
  },
  beforeCreate() {
    fetch('/dogs.json')
    .then(response => response.json())
    .then((dogs) => {
      this.dogs = dogs;
    })
    .catch((err) => {
      console.log(err);
    })
  }
}
</script>

<style>

</style>
