import axios from "axios";

export const httpGet = async (url) => {
  try {
    return await axios.get(url);
  } catch (error) {
    console.error(error);
  }
};
