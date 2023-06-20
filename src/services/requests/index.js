import { server } from "../axios";

export const schedule = {
    get: async () => await server.get("/schedules").then((response) => response.data).catch((error) => error),
    getById: async (id) => await server.get("/schedules/" + id).then((response) => response.data).catch((error) => error),
    create: async (data) => await server.post("/schedules", data).then((response) => response.data).catch((error) => error),
    update: async (id, data) => await server.put("/schedules/" + id, data).then((response) => response.data).catch((error) => error),
    delete: async (id) => await server.delete("/schedules/" + id).then((response) => response.data).catch((error) => error),
};