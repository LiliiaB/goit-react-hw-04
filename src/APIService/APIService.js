import axios from "axios";

const API_KEY = "urLlGJxdDoZQAVSsDQ2IodbF-XpbvWphd-4WBWa5uK0";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;

export const getPhotos = async (query, page) => {
  return axios.get(`search/photos`, {
    params: {
      query: query,
      page: page,
      per_page: 15,
      orientation: "landscape",
    },
  });
};
