import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function DoctorApprovalTabs() {
    return (



        <Tabs defaultValue="account" className="">
            <TabsList>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="approved">Approved</TabsTrigger>
                <TabsTrigger value="rejected">Rejected</TabsTrigger>
                <TabsTrigger value="all">all</TabsTrigger>
            </TabsList>
            <TabsContent value="pending">
                Pending Table
            </TabsContent>
            <TabsContent value="pending">
                <DoctorApprovalTabs />
            </TabsContent>
            <TabsContent value="approved">
                <DoctorApprovalTabs />
            </TabsContent>
            <TabsContent value="rejected">
                <DoctorApprovalTabs />
            </TabsContent>
            <TabsContent value="all">
                <DoctorApprovalTabs />
            </TabsContent>
        </Tabs>
    )
}

export default DoctorApprovalTabs