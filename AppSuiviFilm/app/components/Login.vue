<template>
  <Page>
      <ActionBar title=" Connexion" />
      <StackLayout>
        <Label text="Connectez-vous" class="title" />
        <TextField v-model="email" hint=" Email" keyboardType="email" />
        <TextField v-model="password" hint=" Mot de passe" secure="true" />
        <Button text=" Se connecter" @tap="loginUser" />
      </StackLayout>
    </Page>
</template>

<script>
import { api } from "~/api";
import { ApplicationSettings } from "@nativescript/core";
import MovieList from "./MovieList.vue";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async loginUser() {
      try {
        if (!this.email || !this.password) {
          alert("Veuillez remplir tous les champs.");
          return;
        }

        console.log(" Tentative de connexion avec :", this.email, this.password);

        const response = await api.login({
          email: this.email,
          password: this.password,
        });

        if (response && response.token) {
          ApplicationSettings.setString("token", response.token);
          console.log(" Token enregistré :", ApplicationSettings.getString("token"));

          alert("Connexion réussie !");
          this.$navigateTo(MovieList);
        } else {
          alert("Échec de la connexion. Vérifiez vos identifiants.");
        }
      } catch (error) {
        console.error(" Erreur de connexion :", error);
        alert("Une erreur s'est produite lors de la connexion.");
      }
    },
  },
};
</script>
