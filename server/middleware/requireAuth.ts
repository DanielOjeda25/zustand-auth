import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express'

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    if (!authHeader) return res.status(401).json({ message: 'No authorization' })

    const token = authHeader.split(' ')[1]
    if (!token) return res.status(401).json({ message: 'No authorization' })

    jwt.verify(token, 'secret', (err, user) => {
        if (err) return res.status(401).json({ message: 'No authorization' })
        req.user = user
        next()
    })
}