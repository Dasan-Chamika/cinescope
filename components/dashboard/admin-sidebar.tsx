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
} from "@/components/ui/sidebar";
import { Logo } from "@/components/shared/logo";
import { ModeToggle } from "@/components/mode-toggle";

export default function AdminSidebar() {
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
              <SidebarMenuItem>ABC</SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
