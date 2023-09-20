import { httpAxios } from "@/helper/httpHelper";
export async function addTask(data) {
    const result = await httpAxios.post("/api/tasks", task).then((response) => response.data)
    return result;
}