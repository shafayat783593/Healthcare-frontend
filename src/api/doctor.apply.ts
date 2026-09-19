import { ApiResponse, ApproveDoctorPayload, Doctor, DoctorApplicationPayload, DoctorParams, VerifyAccountPayload } from "@/components/types";
import apiClient from "@/lib/apiClient";



export function applyDoctor(payload: DoctorApplicationPayload) {


    const forData = new FormData()
    forData.append("data", JSON.stringify(payload.data))

    forData.append("resume", payload.resume)
    for (const file of payload.additionalFiles) {
        forData.append("additionalFiles",file)
    }
    
    
    return apiClient("/doctor/apply", { method: "POST", body: forData });
}

export function verifyAccount(payload: VerifyAccountPayload) {
  return apiClient("/doctor/apply-as-doctor/verify-email", { method: "POST", body: payload });
}


export function getAllDoctor(params:DoctorParams) {
    return apiClient<ApiResponse<Doctor[]>>("/doctor/all-doctors", {
        params
        
    })

}



export function approveDoctor(payload: ApproveDoctorPayload) {
  return apiClient("/doctor/approve-doctor", {
    method: "POST",
    body: payload,
  });
}