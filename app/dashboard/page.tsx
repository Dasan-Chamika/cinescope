import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  console.log("User session:", session);

  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold underline text-center py-6">
        Dashboard
      </h1>
      <h2 className="text-xl font-semibold text-center pb-4">
        Welcome, {session.user.name || "User"}!
      </h2>
    </main>
  );
}
