import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c21179a292c74ab2b0df19e255450787",
  },
});

//https://api.rawg.io/api/games?baseURL=https:%2F%2Fapi.rawg.io%2Fapi&key=c21179a292c74ab2b0df19e255450787
