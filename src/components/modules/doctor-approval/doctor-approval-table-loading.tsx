


"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Skeleton } from "@/components/ui/skeleton";



export default function DoctorApprovalTableLoading() {


    return (
        <div className="border rounded-lg">
            <Table>
                <TableHeader>
                    <TableRow >
                        <TableHead >Name</TableHead>
                        <TableHead >License No</TableHead>
                        <TableHead >Email</TableHead>
                        <TableHead  >No .</TableHead>
                        <TableHead  >specialization
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        [1, 2, 3, 4].map((doctor) => (<TableRow>



                            <TableCell colSpan={6} >
                                <Skeleton className=" h-5 w-100" />
                            </TableCell>
                        </TableRow>
                        )
                        )}

                </TableBody>
            </Table>
        </div>
    );
}