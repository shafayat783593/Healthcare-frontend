"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DoctorParams } from "@/components/types";
import { useSuspensegetAllDoctor } from "@/hooks";
import { Dispatch, SetStateAction } from "react";

interface Props extends DoctorParams {
  handleReview: Dispatch<SetStateAction<string>>;
}

export default function DoctorApprovalTable({
  handleReview,
  ...params
}: Props) {
  const { data } = useSuspensegetAllDoctor(params);

  const doctors = data?.data;
console.log(doctors)
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>License No.</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact No.</TableHead>
            <TableHead>qualifications</TableHead>
            <TableHead>verificationStatus</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {doctors.map((doctor) => (
            <TableRow key={doctor.id}>
              <TableCell>{doctor.name}</TableCell>
              <TableCell>{doctor.licenseNumber}</TableCell>
              <TableCell>{doctor.email}</TableCell>
              <TableCell>
                {doctor.contactNumber ? doctor.contactNumber : "-"}
              </TableCell>
              <TableCell>{doctor.qualifications}</TableCell>
              <TableCell>{doctor.verificationStatus}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="outline"
                  onClick={() => handleReview(doctor.id)}
                >
                  Review
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}