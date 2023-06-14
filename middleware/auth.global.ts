const PUBLIC_ROUTE = ['/']
export default defineNuxtRouteMiddleware((to, from) => {
    const { useAuthUser } = useAuth()
    const currentUser = useAuthUser()
    if (PUBLIC_ROUTE.includes(to.fullPath)) {
        return
    }
    if (!currentUser.value) {
        return navigateTo('/')
    }
})
