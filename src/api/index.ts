import express from 'express'
const router = express.Router();

router.use('/users', require('./user/user_api'))

export default router;