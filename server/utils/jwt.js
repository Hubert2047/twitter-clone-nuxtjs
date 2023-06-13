import jwt from 'jsonwebtoken'
const generateAccessToken = (user) => {
    const config = useRuntimeConfig()
    return jwt.sign({ userIdL: user.id }, config.jwtAccessSecret, {
        expiresIn: '10m',
    })
}
const generateRefeshToken = (user) => {
    const config = useRuntimeConfig()
    return jwt.sign({ userIdL: user.id }, config.jwtRefeshSecret, {
        expiresIn: '4h',
    })
}
const generateTokens = (user) => {
    const accessToken = generateAccessToken(user)
    const refeshToken = generateRefeshToken(user)
    return {
        accessToken,
        refeshToken,
    }
}
const sendRefeshToken = (event, refeshToken) => {
    setCookie(event, 'refesh_token', refeshToken, {
        httpOnly: true,
        sameSite: true,
    })
}
export { generateTokens, sendRefeshToken }
