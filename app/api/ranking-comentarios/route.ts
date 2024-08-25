import { NextResponse } from "next/server"
import rankingComentarios from '@/mocks/ranking-comunicados.json';

export async function GET() {
    return NextResponse.json(rankingComentarios)
}