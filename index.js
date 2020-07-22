// const express = require("express");
import "core-js";
import express from "express";
const app = express();

// respond with "hello world" when a GET request is made to the homepage
// 여기서부터는 나중에 다시
// app.get('/', function(req, res) {
// 	res.send('hello world')
// })

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from Home");

const handleProfile = (req, res) => res.send("You are on my profile");

app.get("/profile", handleProfile);

app.get("/", handleHome);

app.listen(PORT, handleListening);
