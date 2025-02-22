<template>
  <Page>
    <ActionBar title=" Suivi de Films " />
    <StackLayout>
      <Label text="Bienvenue sur Suivi de Films" class="title" />
      <Button text=" S'inscrire" @tap="navigateToRegister" />
      <Button text=" Se connecter" @tap="navigateToLogin" />
      <Button text=" Voir les films" @tap="navigateToMovies" />
    </StackLayout>
  </Page>
</template>

<script>
import Register from "./Register.vue";
import Login from "./Login.vue";
import MovieList from "./MovieList.vue";

export default {
  methods: {
    navigateToRegister() {
      console.log("Navigation vers Register.vue");
      this.$navigateTo(Register);
    },
    navigateToLogin() {
      console.log("Navigation vers Login.vue");
      this.$navigateTo(Login);
    },
    navigateToMovies() {
      console.log("Navigation vers MovieList.vue");
      this.$navigateTo(MovieList);
    }
  }
};
</script>
