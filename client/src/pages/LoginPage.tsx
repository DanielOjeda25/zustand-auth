import React from 'react'
import { loginRequest, profileRequest } from '../api/auth'
import { useAuthStore } from '../store/auth'
import { useNavigate } from 'react-router-dom'
const LoginPage = () => {
    const navigate = useNavigate()
    const setToken = useAuthStore(state => state.setToken)
    const setProfile = useAuthStore(state => state.setProfile)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = (e.currentTarget.elements[0] as HTMLInputElement).value
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value
        const responseLogin = await loginRequest(email, password)
        setToken(responseLogin.data.token)

        const responseProfile = await profileRequest()
        setProfile(responseProfile.data.profile)
        navigate('/profile')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='ingrese su email' />
            <input type="password" name="" id="" />
            <button>Login</button>
        </form>
    )
}

export default LoginPage