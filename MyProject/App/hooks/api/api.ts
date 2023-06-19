import axios from "axios";

export const api = axios.create({
    // baseURL: 'http://20.100.181.92:3001/api',
    baseURL: 'https://6964-89-28-121-208.ngrok.io/api',
  });