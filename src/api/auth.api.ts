import apiClient from "@/lib/apiClient";

export const userLogin = (payload:{email:string, password:string})=>{
    return  apiClient("/auth/login",{
        method: "POST",
        body:payload
    })
}
export const logout = ()=>{
    return  apiClient("/auth/logout",{
        method: "POST",

    })
}
export const getLoggedInUser = ()=>{
    return  apiClient("/auth/me")
}