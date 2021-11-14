import axios from 'axios';
import { authURL } from "./API-config";

export const signIn = ({ email, password }) => {
  return axios.post(authURL, {
    email,
    password,
    returnSecureToken: true
  })
};



var config = {
  method: 'get',
  url: 'https://newsapi.org/v2/top-headlines?country=ru&apiKey=f5382ac40298402f80b8fd4bc8c16b2f',
  headers: {}
};

export const getNews = () => {
  return axios(config)
    .then(  response => {
      return response.data.articles
    })
}

