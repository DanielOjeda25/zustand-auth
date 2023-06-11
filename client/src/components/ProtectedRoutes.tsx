import React from 'react'
import { Navigate } from 'react-router-dom'
type Props = {
    isAllowed: boolean,
    children?: React.ReactNode
}

const ProtectedRoutes = ({ children, isAllowed }: Props) => {
    if (!isAllowed) return <Navigate to={'/login'} />;
    return (
        <div>{children}</div>
    )
}

export default ProtectedRoutes