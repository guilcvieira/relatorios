import rankingComentarios from '@/mocks/ranking-comunicados.json';
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(rankingComentarios)
}