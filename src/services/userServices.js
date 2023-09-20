import { httpAxios } from "@/helper/httpHelper";
export async function serviceSignUp(user) {
    const result = await httpAxios.post("/api/users", user).then((res) => res.data)
    return result;
}