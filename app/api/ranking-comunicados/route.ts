
import rankingComunicados from "@/mocks/ranking-comunicados.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(rankingComunicados);
}