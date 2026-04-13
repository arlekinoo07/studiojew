import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || user.password !== password) {
    return new Response(JSON.stringify({ error: 'Неверные данные' }), { status: 401 });
  }

  // если все ок, возвращаем токен или user
  return new Response(JSON.stringify({ user }), { status: 200 });
}