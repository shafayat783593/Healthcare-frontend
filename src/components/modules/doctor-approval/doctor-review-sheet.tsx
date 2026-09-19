import { ApproveDoctorPayload, DoctorParams } from "@/components/types";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { useApproveDoctor, usegetAllDoctor } from "@/hooks";
import { useState } from "react";


interface Props extends DoctorParams {
  selectedId: string,

  onClose: () => void

}



export default function DoctorReviewSheet({ selectedId, onClose, ...params }: Props) {
  const [confirmRejection, setconfirmRejection] = useState(false)
  const [rejectionRejon, setrejectionRejon] = useState("")
  
  const { data } = usegetAllDoctor(params)
  const { mutate: verify, isPending } = useApproveDoctor(params)
  console.log("From inside shid", data)
  const selectedDoctor = data?.data?.find((doctor => doctor.id === selectedId))
  console.log("selectd doce", selectedDoctor)



  const handelCLose = () => {
    setconfirmRejection(false);
    onClose()
    setrejectionRejon("")
  }


  const handelReviewAction = (status: "APPROVED" | "REJECTED") => {

    const reviewData: ApproveDoctorPayload = {
      doctorId: selectedId,
      verificationStatus: status,
      rejectionReason: rejectionRejon

    }
    verify(reviewData, {
      onSuccess: (res) => {
        console.log("Success", res);
        handelCLose();
      },
      onError: (error) => {
        console.log("Error", error);
      },
    });
  };








if (!selectedDoctor) {
  return
}


return (
  <Sheet open={!!selectedId} onOpenChange={handelCLose} >

    <SheetContent>
      <SheetHeader>
        <SheetTitle>Review and take action</SheetTitle>
        <SheetDescription>This action cannot be undone.</SheetDescription>
      </SheetHeader>
      Doctor name:{selectedDoctor?.name}
      <SheetFooter>


        {
          confirmRejection ? (
            <div className="flex flex-col  gap-3">
              <Textarea value={rejectionRejon} onChange={(e) => setrejectionRejon(e.target.value)} />

              <div className="flex  gap-2">
                <Button disabled={!rejectionRejon} className='flex-1' onClick={() => handelReviewAction("REJECTED")} variant="outline">Confirm Reject</Button>
                <Button className='flex-1' onClick={handelCLose} variant="destructive">Cancle</Button>
              </div>
            </div>
          ) : (


            <div className="flex gap-2">
              <Button onClick={() => handelReviewAction("APPROVED")} variant="default" className="flex-1">
                Approved

              </Button>
              <Button onClick={() => setconfirmRejection(true


              )} variant="destructive" className="flex-1"

              >
                Reject

              </Button>
            </div>
          )
        }


      </SheetFooter>
    </SheetContent>
  </Sheet>
);
}