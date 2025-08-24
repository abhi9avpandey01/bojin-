import express from 'express';



const router=express.Routerr()

router.post("/register",registeruser)

router.post("/login",loginuser)

router.get("/profile",getprofile,authmiddleware)

export default router

