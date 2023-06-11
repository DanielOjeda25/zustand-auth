import { create } from 'zustand'
import { persist } from 'zustand/middleware'
type State = {
    token: string,
    profile: any,
    isAuth: boolean
}
type Action = {
    setToken: (token: string) => void
    setProfile: (profile: any) => void
    logout: () => void
}
export const useAuthStore = create(persist<State & Action>(
    (set) => ({
        token: "",
        profile: null,
        isAuth: false,
        setToken: (token: string) => set((state) => ({
            token,
            isAuth: true
        })),
        setProfile: (profile: any) => set((state) => ({
            profile
        })),
        logout: () => set((state) => ({
            token: "",
            profile: null,
            isAuth: false
        }))
    }), {
    name: "auth"
}
))