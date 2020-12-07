const {Router} = require('express')
const User = require('../models/User')
const bcript = require('bcryptjs')
const jwt = require('jsonwebtoken')
const constants = require('../config.json')

const router = Router()

router.post('/register', async (req, res) => {
    try {
        const {name, login, password} = req.body

        const candidate = await User.findOne({login})

        if (candidate) {
            return res.status(400).json({message: 'Such user already exists'})
        }

        const hashedPassword = await bcript.hash(password, 20)
        const user = new User({name, login, password: hashedPassword})

        await user.save()

        res.status(201).json({message: 'User created successfully'})
    } catch (e) {
        res.status(500).json('Server error during registration')
    }
})

router.post('/login', async (req, res) => {
    try {
        const {login, password} = req.body

        const user = await User.findOne({login})

        if (!user) {
            return res.status(400).json({message: 'User not found'})
        }

        const isMatchPassword = bcript.compare(password, user.password)

        if (!isMatchPassword) {
            return res.status(400).json({message: 'Wrong login or password'})
        }

        const token = jwt.sign(
            {userId: user.id},
            constants.JwtToken,
            {expiresIn: '1h'}
        )

        res.json({token, userID: user.id})

        await user.save()

        res.status(201).json({message: 'User created successfully'})
    } catch (e) {
        res.status(500).json('Server error during registration')
    }
})
module.exports = router