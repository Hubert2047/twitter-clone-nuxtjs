const PUBLIC_ROUTE = ['/']
export default defineNuxtRouteMiddleware((to, from) => {
    const currentUser = useCurrentUser()
    if (PUBLIC_ROUTE.includes(to.fullPath)) {
        return
    }
    if (!currentUser.value) {
        return navigateTo('/')
    }
})
