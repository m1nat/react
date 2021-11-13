import axios from 'axios';
import { authURL } from "./API-config";

export const signIn = ({email, password}) => {
  return axios.post(authURL, {
    email,
    password,
    returnSecureToken: true
  })
};