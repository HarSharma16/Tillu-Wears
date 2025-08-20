import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: "Not Authorized. Login Again." });
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ success: false, message: "Token missing. Login Again." });
        }
        try {
            const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
            // Optionally check token_decoded.email and token_decoded.password if you store them in the token
            req.admin = token_decoded;
            next();
        } catch (err) {
            return res.status(401).json({ success: false, message: "Invalid token. Login Again." });
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export default adminAuth