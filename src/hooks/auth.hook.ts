import { getLoggedInUser, logout, userLogin } from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";


export function useLogin(){

    return useMutation({
        mutationFn:userLogin
    })
}
export function useLogout(){

    return useMutation({
        mutationFn:logout
    })
}
export function useGetLoggedInUser(){

  return useQuery({
    queryKey:["user"],
    queryFn:getLoggedInUser,
    retry:false

  })
}


