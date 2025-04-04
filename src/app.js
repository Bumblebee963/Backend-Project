import express from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app=express()

app.use(cors({
    origin: process.nextTick.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({
    limit: "16kb"
}))
app.use(express.urlencoded({
    limit: "16kb",
    encoded : true
}))
app.use(express.static("public"))
app.use(cookieParser())
 



 export {app}