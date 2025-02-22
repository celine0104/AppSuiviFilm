import Vue from "nativescript-vue";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import MovieList from "./components/MovieList.vue";

Vue.config.silent = false; // Active les logs dans la console

new Vue({
  template: `
    <Frame>
      <Home />
    </Frame>
  `,
  components: {
    Home,
    Login,
    Register,
    MovieList,
  },
}).$start();
