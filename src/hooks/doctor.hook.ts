"use client";


import { verifyAccount } from "@/api";
import { applyDoctor, approveDoctor, getAllDoctor } from "@/api/doctor.apply";
import { DoctorParams } from "@/components/types";
import { useMutation, useQuery, useSuspenseQuery } from "@tanstack/react-query";



export function useApplyAsDoctor() {

  return useMutation({
    mutationFn: applyDoctor
  })
}

export function useVerifyDoctorAccount() {
  return useMutation({
    mutationFn: verifyAccount,
  });
}
export function usegetAllDoctor(params: DoctorParams) {
  return useQuery({
    queryKey: ["doctor", params],
    queryFn: () => getAllDoctor(params)
  });
}



export function useSuspensegetAllDoctor(params: DoctorParams) {
  return useSuspenseQuery({
    queryKey: ["doctor", params],
    queryFn: () => getAllDoctor(params)
  });
}


export function useApproveDoctor(params: DoctorParams) {
  return useMutation({
    mutationFn: approveDoctor,
  });
}
