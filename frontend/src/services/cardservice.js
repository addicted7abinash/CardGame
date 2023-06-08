import axios from "axios";

const API_URL = "/cards";

const getCards = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const cardService = {
  getCards,
};

export default cardService;
