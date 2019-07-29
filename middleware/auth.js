const config = require('config')
const jwt = require('jsonwebtoken')

// Use hosting values if available, otherwise default 
const secret = process.env.JWT_SECRET || config.get("jwtSecret")

const auth = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '')
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' })
  try {
    // Verify token
    const decoded = jwt.verify(token, secret)
    // Add user from payload
    req.user = decoded;
    next() // pass along to next handler
  } catch (error) { res.status(400).json({ msg: 'Token is not valid' }) }
}

module.exports = auth