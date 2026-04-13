import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  if (!token) return NextResponse.json({ email: null });
  try {
    const decoded = jwt.verify(token, "SUPERSECRET") as { email: string };
    return NextResponse.json({ email: decoded.email });
  } catch {
    return NextResponse.json({ email: null });
  }
}