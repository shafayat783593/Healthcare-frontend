import { DoctorApplicationPayload, VerifyAccountPayload } from "@/components/types";
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
  return apiClient("/apply-as-doctor/verify-email", { method: "POST", body: payload });
}
