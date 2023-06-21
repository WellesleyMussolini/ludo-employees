import axios from "axios";

export const server = axios.create({ baseURL: "https://schedule-manager-api.onrender.com" }); 