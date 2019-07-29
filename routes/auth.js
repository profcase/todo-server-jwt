const bcrypt = require('bcryptjs')
const config = require('config')
const express = require('express')
const jwt = require('jsonwebtoken')

const auth = require('../middleware/auth.js')
const User = require('../models/user.js')

const router = express.Router()

// @route   POST /auth
// @desc    Authenticate user
// @access  Public
router.post('/', (req, res) => {
  const { email, password } = req.body
  if (!email || !password) { return res.status(400).json({ msg: 'Please enter all fields' }) }

  // Check for existing user
  User.findOne({ email })
    .then(user => {
      if (!user) return res.status(400).json({ msg: 'User Does not exist' })
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' })
          jwt.sign(
            { id: user.id },
            config.get('jwtSecret'),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
            }
          )
        })
    })
})

// @route   GET /auth/user
// @desc    Get user data
// @access  Private
router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user))
})

module.exports = router