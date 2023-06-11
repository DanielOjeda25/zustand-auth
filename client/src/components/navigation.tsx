import { Link } from 'react-router-dom'

type Props = {}

const Navigation = (props: Props) => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/login'}>Login</Link>
                </li>
                <li>
                    <Link to={'/profile'}>profile</Link>
                </li>
                <li>
                    <Link to={'/register'}>Register</Link>
                </li>
                <li>
                    <Link to={'/'}>home</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation