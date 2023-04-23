import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

const prisma = new PrismaClient();
prisma.$connect();
export async function GET(request: Request)  {
    const chats = await prisma.chat.findMany();
    return NextResponse.json(chats)
}
export async function POST(request: Request) {
    const body = await request.json();
    const chat = await prisma.chat.create({
        data: {
            mensagem: body.mensagem,
        }
    });
    return NextResponse.json(chat)
}
