import React from "react"
import { SidebarProvider, SidebarTrigger } from "../../../components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {/* Page content here */}
      </main>
    </SidebarProvider>
  )
}