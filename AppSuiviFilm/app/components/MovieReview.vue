<template>
   <Page>
      <ActionBar title=" Évaluer le Film" />
      <StackLayout>
        <Label :text=" + movie.title" class="title" />

        <Label text=" Avez-vous vu ce film ?" />
        <Switch v-model="hasWatched" />

        <Label text=" Attribuez une note (sur 10) :" />
        <Slider v-model="rating" minValue="0" maxValue="10" step="1" />

        <Label :text="' Note: ' + rating" />

        <Button text=" Enregistrer" @tap="saveEvaluation" />
        <Button text=" Annuler" @tap="cancelEvaluation" />
      </StackLayout>
    </Page>
</template>

<script>
import { api } from "~/api";
import { ApplicationSettings } from "@nativescript/core";

export default {
  data() {
    return {
      movie: {}, // Film en cours
      rating: 5, // Note par défaut
      watched: false, // Indicateur si le film a été visionné
    };
  },
methods: {
  async saveEvaluation() {
    try {
      const token = ApplicationSettings.getString("token");

      if (!token) {
        alert("Vous devez être connecté pour enregistrer l'évaluation !");
        return;
      }

      console.log(" Envoi de l'évaluation...");

      const response = await api.submitReview(token, {
        movieId: this.movie.id,
        rating: this.rating,
        watched: this.watched,
      });

      if (response && response.success) {
        alert("Évaluation enregistrée avec succès !");
      } else {
        console.error(" Réponse inattendue de l'API :", response);
        alert("Erreur lors de l'enregistrement de l'évaluation !");
      }
    } catch (error) {
      console.error("Erreur lors de l'enregistrement :", error);
      alert("Erreur lors de l'enregistrement de l'évaluation !");
    }
  }
}
};
</script>

