import axios from "axios"; // Importation correcte d'Axios

const API_URL = "http://10.0.2.2:3000/api"; // URL correcte pour l'API

//  Fonction pour gérer les erreurs API et afficher les logs
const handleApiError = (error, context) => {
  const errorMessage = error.response?.data?.error || error.message || "Erreur inconnue";
  console.error(` Erreur API (${context}):`, errorMessage);

  alert(` Une erreur s'est produite lors de ${context}.\n\nDétails: ${errorMessage}`);

  return null; // ️ Évite un crash de l'application en retournant `null`
};

export const api = {
  //  Inscription d'un utilisateur
  async register(userData) {
    try {
      console.log("Envoi des données d'inscription :", userData);
      const response = await axios.post(`${API_URL}/users/register`, userData);

      if (!response?.data) throw new Error("Réponse API invalide");

      console.log(" Inscription réussie :", response.data);
      return response.data;
    } catch (error) {
      return handleApiError(error, "l'inscription");
    }
  },

  //  Connexion d'un utilisateur
 async login(credentials) {
    try {
      console.log(" Tentative de connexion :", credentials);
      const response = await axios.post(`${API_URL}/users/login`, credentials);
      if (!response?.data) throw new Error("Réponse API invalide");
      console.log(" Connexion réussie :", response.data);
      return response.data;
    } catch (error) {
      return handleApiError(error, "la connexion");
    }
  },
  //  Récupération des films
  async getMovies(token) {
    try {
      console.log("🎬 Récupération des films depuis l'API...");
      const response = await axios.get(`${API_URL}/films`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response?.data) throw new Error("Réponse API invalide");

      console.log(" Films récupérés :", response.data);
      return response.data;
    } catch (error) {
      return handleApiError(error, "la récupération des films");
    }
  },

  //  Ajouter un avis (visionnage + note)
  async addReview(reviewData, token) {
    try {
      console.log(" Envoi de l'évaluation à l'API :", reviewData);
      const response = await axios.post(`${API_URL}/visionnages`, reviewData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response?.data) throw new Error("Réponse API invalide");

      console.log(" Évaluation enregistrée :", response.data);
      return response.data;
    } catch (error) {
      return handleApiError(error, "l'enregistrement de l'évaluation");
    }
  },
  async submitReview(token, reviewData) {
      try {
        const response = await axios.post("http://10.0.2.2:3000/film/visionnages", reviewData, {
          headers: { Authorization: `Bearer ${token}` },
        });

        return response.data; // Vérifie bien que l'API renvoie { success: true }
      } catch (error) {
        console.error("Erreur API lors de l'envoi de la review :", error);
        throw error;
      }
    }
};
