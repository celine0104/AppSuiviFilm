<template>
 <Page>
     <ActionBar title=" Inscription" />
     <StackLayout>
       <Label text="Rejoignez-nous !" class="title" />
       <TextField v-model="username" hint="Nom d'utilisateur" />
       <TextField v-model="email" hint=" Email" />
       <TextField v-model="password" hint=" Mot de passe" secure="true" />
       <Button text="S'inscrire" @tap="registerUser" />
     </StackLayout>
   </Page>
</template>

<script>
  import { api } from "../api"; // Correction de l'importation

  export default {
    data() {
      return {
        username: "",
        email: "",
        password: "",
      };
    },
    methods: {
      async registerUser() {
        try {
          if (!this.username.trim() || !this.email.trim() || !this.password.trim()) {
            alert("Veuillez remplir tous les champs.");
            return;
          }

          console.log("Envoi des données d'inscription...");
          const response = await api.register({
            username: this.username,
            email: this.email,
            password: this.password,
          });

          if (response?.id) {
            alert(" Inscription réussie !");
            this.username = "";
            this.email = "";
            this.password = "";
          } else {
            alert("️ Échec de l'inscription. Vérifiez vos informations.");
          }
        } catch (error) {
          console.error(" Erreur lors de l'inscription :", error.message);
          alert("Une erreur s'est produite lors de l'inscription.");
        }
      },
    },
  };
  </script>
