import bcrypt from 'bcrypt'
import { prisma } from '.'
const createUser = (userData) => {
    return prisma.user.create({
        data: { ...userData, password: bcrypt.hashSync(userData.password, 10) },
    })
}
const getUserbyUserName = (userName) => {
    return prisma.user.findUnique({
        where: { userName: userName },
    })
}
export { createUser, getUserbyUserName }
