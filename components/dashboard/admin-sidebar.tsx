import {
  HomeIcon,
  FilmIcon,
  UsersIcon,
  UserIcon,
  MessagesSquare,
  BarChartIcon,
  SettingsIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/shared/logo";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

const menuItems = [
  { title: "Dashboard", href: "/dashboard", icon: HomeIcon, exact: true },
  { title: "Movies", href: "/dashboard/movies", icon: FilmIcon },
  { title: "Users", href: "/dashboard/users", icon: UsersIcon },
  { title: "Reviews", href: "/dashboard/reviews", icon: MessagesSquare },
  { title: "Analytics", href: "/dashboard/analytics", icon: BarChartIcon },
  { title: "Settings", href: "/dashboard/settings", icon: SettingsIcon },
];
const accountItems = [
  { title: "Profile", href: "/profile", icon: UserIcon },
  { title: "Public Site", href: "/", icon: FilmIcon },
];

export default function AdminSidebar() {
  const isActive = (item: { href: string; exact?: boolean }) => {
    if (item.exact) {
    }
  };

  return (
    <Sidebar
      collapsible="icon"
      className=" bg-primary/5 border-r bor-primary/20"
    >
      {/* Header with Logo */}
      <SidebarHeader>
        <div className=" flex items-center p-2">
          <Logo />
          <h2 className="ml-2 text-xl font-bold">CineScope</h2>
          <div className=" ml-auto flex items-center justify-center">
            <ModeToggle />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* Menu */}
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
