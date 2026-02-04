import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // console.log("SESSION::", session);

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  runtime: "nodejs", // Node.js runtime for better auth compatibility
  matcher: ["/dashboard/:path*", "/profile/:path*"],
};
