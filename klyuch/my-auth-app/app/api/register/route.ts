import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // проверка: пользователь уже есть?
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Пользователь уже существует" },
        { status: 400 }
      );
    }

    // создаём пользователя
    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });

    return NextResponse.json({
      user: { email: user.email },
    });
  } catch (error) {
  console.error("REGISTER ERROR:", error);
  return NextResponse.json(
    { error: "Ошибка сервера" },
    { status: 500 }
  );
}
}