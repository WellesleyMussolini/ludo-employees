import { server } from "../axios/axios";

export const employees = {
    get: async () => await server.get("/employees").then((response) => response.data).catch((error) => error),
    getById: async (id) => await server.get("/employees/" + id).then((response) => response.data).catch((error) => error),
};