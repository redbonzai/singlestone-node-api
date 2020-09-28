import express from 'express'
import { register, login, logout } from '../controllers/AuthController'
import { getUserById } from '../controllers/UserController'
import {userSignupValidator} from "../middleware/userValidator";

const router = express.Router();

router.post('/register',userSignupValidator, register)
router.post('/login', login)
router.get('/logout/:userId', getUserById, logout)

router.param('userId', getUserById)

export default router;
