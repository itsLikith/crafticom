import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/home/craftizen-sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': '20rem',
          '--sidebar-width-mobile': '20rem',
        } as Record<string, string>
      }
    >
      <div className="flex w-full min-h-screen">
        <AppSidebar />
        <main className="flex-1 p-3 w-full min-h-screen min-w-0 overflow-x-auto bg-[linear-gradient(180deg,_#FFEBDD_0%,_#FBF6ED_50%,_#FFFCF1_100%)]">
          <SidebarTrigger />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
