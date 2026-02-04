import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AdminHeader from "@/components/dashboard/admin-header";
import AdminSidebar from "@/components/dashboard/admin-sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      {/* 1. Sidebar Section */}
      <AdminSidebar />

      {/* 2. Main Content Area */}
      <SidebarInset>
        <AdminHeader />
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
