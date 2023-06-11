import { useAuthStore } from '../store/auth'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
    const logout = useAuthStore(state => state.logout)
    const profile = useAuthStore(state => state.profile)
    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
        navigate('/login')
    }
    return (
        <div>Profile
            <div>
                {JSON.stringify(profile)}
            </div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Profile