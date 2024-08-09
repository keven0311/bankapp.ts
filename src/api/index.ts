import express from 'express'
const router = express.Router();

router.use('/users', require('./user/user_api'))

module.exports = router;