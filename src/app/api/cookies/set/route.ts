import { JWT_TOKEN_KEY } from "@/consts/jwt";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { jwt } = await request.json();
  const cookiesStore = await cookies();
  // Set the cookie
  cookiesStore.set(JWT_TOKEN_KEY, jwt, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 3600, // 1 hour
    path: "/",
  });

  return NextResponse.json({ message: "Cookie set successfully" });
}
