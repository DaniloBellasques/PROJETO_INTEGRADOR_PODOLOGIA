import express, {Router,Request, Response} from "express";
import { Server } from "http";
import path from "path";
import mustache from 'mustache-express'

import mainRoutes from './routes/index'
import dotenv from 'dotenv'

dotenv.config()


const server = express()

server.use(mainRoutes)

server.set('view engine', 'mustache')

server.set('views',path.join(__dirname, 'views'))

server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')))

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada')
})



server.listen(process.env.PORT)