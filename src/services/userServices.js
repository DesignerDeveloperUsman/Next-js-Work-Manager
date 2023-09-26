import { httpAxios } from "@/helper/httpHelper";
export async function serviceSignUp(user) {
    const result = await httpAxios.post("/api/users", user).then((res) => res.data)
    return result;
}
export async function currentUser() {
    const result = await httpAxios.get("/api/current").then((res) => res.data)
    return result;
}
export async function logOutUser() {
    const result = await httpAxios.post("/api/logout").then((res) => res.data)
    return result;
}
