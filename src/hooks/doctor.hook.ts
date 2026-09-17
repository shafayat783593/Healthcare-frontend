import { verifyAccount } from "@/api";
import { applyDoctor } from "@/api/doctor.apply";
import { useMutation } from "@tanstack/react-query";



export function useApplyAsDoctor(){

    return useMutation({
        mutationFn:applyDoctor
    })
}








export function useVerifyDoctorAccount() {
  return useMutation({
    mutationFn: verifyAccount,
  });
}
