import { prisma } from '.'
const createRefeshToken = (refeshToken) => {
    return prisma.refeshToken.create({ data: refeshToken })
}

export { createRefeshToken }
