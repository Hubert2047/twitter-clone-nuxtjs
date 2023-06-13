import { userTransformer } from '@/server/transformers/user'
import { createUser } from '../../db/user'
export default defineEventHandler(async (event) => {
    const { userName, password, repeatPassword, email, name } = await readBody(event)
    if (!userName || !password || !repeatPassword || !email || !name) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid params',
        })
    }
    if (password !== repeatPassword) {
        throw createError({
            statusCode: 400,
            statusMessage: 'password do not match ',
        })
    }
    try {
        const user = await createUser({
            userName,
            password,
            email,
            name,
            profileImage: 'https://picsum.photos/200/200',
        })
        return userTransformer(user)
    } catch (error) {
        throw createError({
            statusCode: 400,
            message: error.message,
        })
    }
})
