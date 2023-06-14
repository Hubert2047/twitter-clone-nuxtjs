type User = {
    id: string
    name: string
    profileImage: string
    userName: string
    email: string
    accessToken: string
}
export default () => {
    const useAuthUser = () => useState<User | null>('auth_user', () => null)
    const setAuthUser = (newUser: User) => {
        const authUser = useAuthUser()
        authUser.value = newUser
    }
    const login = function (userName: string, password: string) {
        return new Promise(async (resolve, reject) => {
            try {
                const user: User = await $fetch('/api/auth/login', {
                    method: 'POST',
                    body: { userName, password },
                }).then((res: any) => res.user)
                setAuthUser(user)
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }
    return { login, useAuthUser }
}
