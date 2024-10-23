export const fetchRankingComentarios = async () => {
    return new Promise((resolve, reject) => {
        try {
            const res = fetch('http://localhost:3000/api/ranking-comentarios')
            setTimeout(() => {
            resolve(res)
            }   , 5000)
        } catch (error) {
            reject(error)
        }
    })
}

export const fetchRankingComunicados = async () => {
    return new Promise((resolve, reject) => {
        try {
            const res = fetch('http://localhost:3000/api/ranking-comunicados')
            setTimeout(() => {
            resolve(res)
            }   , 5000)
        } catch (error) {
            reject(error)
        }
    })
}