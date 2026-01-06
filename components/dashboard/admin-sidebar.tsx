"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const isActive = (item: { href: string; exact?: boolean }) => {
    if (item.exact) {
      return pathname === item.href;
    }
    if (item.href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(item.href);
  };

  return (
    <Sidebar
      collapsible="icon"
      className=" bg-primary/5 border-r bor-primary/20"
    >
      {/* Header with Logo */}
      <SidebarHeader className=" bg-primary/5">
        <div className=" flex items-center p-2">
          <Logo />
          <h2 className="ml-2 text-xl font-bold">CineScope</h2>
          <div className=" ml-auto flex items-center justify-center">
            <ModeToggle />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className=" bg-primary/5">
        {/* Menu */}
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={
                      isActive(item)
                        ? " bg-primary text-white font-medium hover:bg-primary/90 hover:text-white"
                        : "hover:bg-primary/10"
                    }
                    asChild
                  >
                    <Link href={item.href}>
                      <item.icon className=" size-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Account */}
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={
                      isActive(item)
                        ? " bg-primary text-white font-medium hover:bg-primary/90 hover:text-white"
                        : "hover:bg-primary/10"
                    }
                    asChild
                  >
                    <Link href={item.href}>
                      <item.icon className=" size-4" />
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
