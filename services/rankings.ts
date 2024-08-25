export const fetchRankingComentarios = async () => {
    const rankingComentarios = await fetch('http://localhost:3000/api/ranking-comentarios')
    return rankingComentarios
}