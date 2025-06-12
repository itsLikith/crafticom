import React from 'react';
import {
  SidebarProvider,
  SidebarTrigger,
} from '../../../components/ui/sidebar';
import { AppSidebar } from './app-sidebar';
import Carousel from './carousel';

export default function Page() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <main className="flex-1 relative transition-all duration-300">
          <div className="absolute top-4 left-4 z-10">
            <SidebarTrigger />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <Carousel />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
