import { httpAxios } from "@/helper/httpHelper";
export async function logInService(logged) {
    const result = await httpAxios.post("/api/login", logged).then((res) => res.data)
    return result;
}