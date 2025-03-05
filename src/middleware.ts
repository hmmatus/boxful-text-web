import { JWT_TOKEN_KEY } from "@/consts/jwt";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const cookiesStore = await cookies();
  const jwt = cookiesStore.get(JWT_TOKEN_KEY);
  console.log("🚀 ~ middleware ~ jwt:", jwt);

  // If the JWT cookie exists but has an empty value, delete it
  if (jwt && jwt.value === "") {
    cookiesStore.delete("jwt");
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (!jwt) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/order/:path*",
};
