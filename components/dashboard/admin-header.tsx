import UserNav from "@/components/dashboard/user-nav";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function AdminHeader() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const handleLogout = async () => {
    "use server";

    await auth.api.signOut({
      headers: await headers(),
    });

    redirect("/login");
  };

  console.log("User session:", session);

  return (
    <header className=" sticky top-0 z-50 bg-background border-b">
      <div className=" flex h-16 items-center justify-between px-4">
        <h1 className=" text-xl font-bold ">Admin Dashboard</h1>

        {/* User Navigation */}
        <UserNav handleLogout={handleLogout} user={session.user} />
      </div>
    </header>
  );
}
