<template>
  <v-app>
    <v-app-bar app color="teal" dark dense>
      <v-btn text to="/">Home</v-btn>
      <v-spacer/>
      <v-btn class="ml-2" text to="/about">About</v-btn>
      <v-btn class="ml-2" text to="/events">Events</v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <my-footer/>
  </v-app>
</template>

<script>
  import MyFooter from './components/footer'

  export default {
    components: {
      MyFooter,
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
