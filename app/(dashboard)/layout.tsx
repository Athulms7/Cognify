import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/Appsidebar"
import { Appbar } from "@/components/appbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider >
      <Appbar/>
      <AppSidebar />
      
        <SidebarTrigger />
        {children}
      
    </SidebarProvider>
  )
}