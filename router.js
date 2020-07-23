import express, { Router } from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send('user index'));  // home에다가 함수 하나 넣기
userRouter.get("/edit", (req, res) => res.send('user edit'));
userRouter.get("/password", (req, res) => res.send('user password'));
