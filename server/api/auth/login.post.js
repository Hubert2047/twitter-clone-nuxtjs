import { createRefeshToken } from '@/server/db/refeshToken'
import { getUserbyUserName } from '@/server/db/user'
import { generateTokens, sendRefeshToken } from '@/server/utils/jwt'
import bcrypt from 'bcrypt'
import { userTransformer } from '../../transformers/user'

export default defineEventHandler(async (event) => {
    const { userName, password } = await readBody(event)
    if (!userName || !password) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Ivalid params',
        })
    }
    try {
        //is the user registerd
        const user = await getUserbyUserName(userName)
        if (!user) {
            throw createError({
                statusCode: 400,
                statusMessage: 'user not found',
            })
        }
        //compare passwords
        const doesThePasswordsMatch = await bcrypt.compare(password, user.password)
        if (!doesThePasswordsMatch) {
            throw createError({
                statusCode: 400,
                statusMessage: 'password not correct',
            })
        }
        //generate token
        const { accessToken, refeshToken } = generateTokens(user)
        //save refesh token into db
        await createRefeshToken({ token: refeshToken, userId: user.id })
        //add http only cookie and save refesh token
        sendRefeshToken(event, refeshToken)
        return {
            user: { ...userTransformer(user), accessToken },
        }
    } catch (error) {
        return error
    }
})
