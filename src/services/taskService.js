import { httpAxios } from "@/helper/httpHelper";
export async function addTask(task) {
    const result = await httpAxios.post("/api/tasks", task).then((response) => response.data)
    return result;
}
export async function getUserTask(userId) {
    const result = await httpAxios.get(`/api/users/${userId}/tasks`, userId).then((response) => response.data)
    return result;
}