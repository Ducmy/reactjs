import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID fcb1f0c37a36b4940e7b31677df8e870b5088fec89d63ec52ea2641b9cb96dc6"
  }
});
