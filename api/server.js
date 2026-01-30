import express from 'express'
import cors from 'cors'
import pkg from '@prisma/client'; 
import 'dotenv/config';

const { PrismaClient } = pkg;

const prisma = new PrismaClient(); 

const app = express()
app.use(express.json())
app.use(cors())

//ROTAS

//salvar users
app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    //users.push(req.body)
    
    res.status(201).json(req.body)
    //res.send('Ok, usuário recebido!')
})

//listar users
app.get('/usuarios', async (req, res) => {
    
    let users = []

    if (req.query) {
        users = await prisma.user.findMany({
            where: {
               name : req.query.name,
                email: req.query.email,
                age: req.query.age ? parseInt(req.query.age) : undefined
            }
        })
    } else {
        users = await prisma.user.findMany()
    }
    //
    
    res.status(200).json(users)
})

app.put('/usuarios/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.body.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    
    res.status(201).json(req.body)
})

app.delete('/usuarios/:id', async (req, res) => {

    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: "Usuário deletado com sucesso!"})
})

app.listen(3000)

//mongoDB
//pedro-user , OCCgeyhBBmyOrY9V