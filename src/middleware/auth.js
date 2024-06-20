import jwt from 'jsonwebtoken';

const createToken = (userInfo) => {
    return jwt.sign(userInfo, process.env.SECRET_KEY, {expiresIn: '1h'})
}

const verifyToken = (req, res, next) => {
    const authHeader  = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bareer ')){
        return res.status(401).json({message: 'Token no proporcionado'})
    }

    const token = authHeader.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) =>{
        if(err){
            return res.status(403).json({message: 'Fallo al autenticar token'})
        }
        req.user = decoded
        next()
    })

}

export{
    createToken,
    verifyToken
}