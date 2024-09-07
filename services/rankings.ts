export const fetchRankingComentarios = async () => {
    return new Promise((resolve, reject) => {
        try {
            const rankingComentarios = fetch('http://localhost:3000/api/ranking-comentarios')
            setTimeout(() => {
            resolve(rankingComentarios)
            }   , 5000)
        } catch (error) {
            reject(error)
        }
    })
}