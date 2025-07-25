import {
  Home,
  ChevronUp,
  ShoppingCart,
  Bell,
  Star,
  Compass,
} from 'lucide-react';

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '../../components/ui/avatar';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from '../ui/sidebar';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

import Link from 'next/link';

// Menu items.
const items = [
  {
    title: 'Home',
    url: '/craftizen/home',
    icon: Home,
  },
  {
    title: 'Cart',
    url: '/craftizen/cart',
    icon: ShoppingCart,
  },
  {
    title: 'Notifications',
    url: '/craftizen/notifications',
    icon: Bell,
  },
  {
    title: 'Featured',
    url: '/craftizen/featured',
    icon: Star,
  },
  {
    title: 'Explore',
    url: '/craftizen/explore',
    icon: Compass,
  },
];

export function AppSidebar() {
  return (
    <Sidebar
      collapsible="offcanvas"
      className="bg-[#FFF7F0] border-r border-[#F5E3D8] shadow-sm"
    >
      <SidebarContent className="bg-[#FFF7F0]">
        <SidebarGroup>
          <SidebarGroupLabel>
            <Link href="/">Crafticom</Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>{' '}
                  Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <Link href="/craftizen/profile" className="w-full">
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/craftizen/settings" className="w-full">
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
