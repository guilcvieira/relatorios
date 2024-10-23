import { NextResponse } from "next/server"
import rankingComentarios from '@/mocks/ranking-comentarios.json';

export async function GET() {
    return NextResponse.json(rankingComentarios)
}
