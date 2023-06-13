import { User } from '@/types'
export const useDarkMode = () => useState<boolean>('darkMode', () => true)
export const useCurrentUser = () =>
    useState<User | null>('currentUser', () => {
        return null
    })
