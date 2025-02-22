import { NextResponse } from "next/server";
import prisma from "../../../../prisma";

export async function POST(request: Request) {
  try {
    const { nome, email, telefone } = await request.json();

    if (!nome || !email || !telefone)
      return NextResponse.json(
        { message: "E-mail já cadastrado!" },
        { status: 403 }
      );

    const exists = await prisma.usuario.findUnique({
      where: {
        email
      },
    });

    if (exists) 
        return NextResponse.json(
            { message: "E-mail já cadastrado!" },
            { status: 401 }
        );

    await prisma.usuario.create({
      data: {
        nome,
        email,
        telefone,
      },
    });

    return NextResponse.json(
      { message: "Cliente adicionado com sucesso!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
