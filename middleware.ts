import { NextResponse, NextRequest } from "next/server";
import { getSession } from "@/lib/auth-client";
import { headers } from "next/headers";

export async function middleware(request: NextRequest) {
  const sessionCookie = await getSession({
    fetchOptions: {
      headers: await headers(),
    },
  });

  console.log("SESSION::", sessionCookie);

  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
  runtime: "nodejs",
};

// middleware is in between client and server
