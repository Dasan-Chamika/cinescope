import UserNav from "@/components/dashboard/user-nav";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

const handleLogout = async () => {
  "use server";

  await auth.api.signOut({
    headers: await headers(),
  });

  redirect("/login");
};

export default function AdminHeader() {
  return (
    <header className=" sticky top-0 z-50 bg-background border-b">
      <div className=" flex h-16 items-center justify-between px-4">
        <h1 className=" text-xl font-bold ">Admin Dashboard</h1>

        {/* User Navigation */}
        <UserNav handleLogout={handleLogout} />
      </div>
    </header>
  );
}
