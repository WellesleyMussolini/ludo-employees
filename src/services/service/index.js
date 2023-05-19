import { server } from "../axios/axios";

export const employees = {
    get: async () => await server.get("/employees").then((response) => response.data).catch((error) => error),
    getById: async (id) => await server.get("/employees/" + id).then((response) => response.data).catch((error) => error),
    post: async (employee) => await server.post("/employees", employee).then((response) => response.data).catch((error) => error),
    put: async (id, employee) => await server.put("/employees/" + id, employee).then((response) => response.data).catch((error) => error),
    delete: async (id) => await server.delete("/employees/" + id).then((response) => response.data).catch((error) => error),
};