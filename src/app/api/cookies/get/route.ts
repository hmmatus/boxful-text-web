import { JWT_TOKEN_KEY } from "@/consts/jwt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const jwt = cookieStore.get(JWT_TOKEN_KEY);

  return NextResponse.json({ jwt: jwt?.value });
}
