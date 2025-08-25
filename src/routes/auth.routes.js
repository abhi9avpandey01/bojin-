import express from 'express';
import { registeruser, loginuser, getprofile } from '../controllers/auth.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';


const router=express.Routerr()

router.post("/register",registeruser)

router.post("/login",loginuser)

router.get("/profile",getprofile,authmiddleware)

export default router

