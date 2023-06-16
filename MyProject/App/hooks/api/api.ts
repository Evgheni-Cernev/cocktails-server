import axios from "axios";

export const api = axios.create({
    // baseURL: 'http://20.100.181.92:3001/api',
    baseURL: 'http://192.168.100.24:3001/api',
  });