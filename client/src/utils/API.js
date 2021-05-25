import axios from "axios";

const API = {
  getPortfolioImgs: function () {
    return axios.get("/api/images");
  },

  getOutfits: function () {
    return axios.get("/api/outfits");
  },

  getOutfit: function (id) {
    return axios.get("/api/outfits/" + id);
  },

  updateUserOutfits: function (outfitid) {
    console.log("REQUEST OBJECT", outfitid);
    return axios.put("/api/user/closet/" + outfitid);
  },

  deleteUserOutfit: function (outfitid) {
    return axios.delete("/api/user/closet/" + outfitid);
  },
};

export default API;
// axios get call and then post instead of put (updating and we are not updating).
