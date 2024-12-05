import { Request, Response } from "express";
import {Model, DataTypes} from 'sequelize'
import { Cliente } from '../models/Cliente'

export const home = ((req: Request,res: Response)=>{
    res.render('pages/home')
})

export const dadospessoais= ((req: Request,res: Response)=>{
    res.render('pages/dadospessoais')
})

export const dadosPessoaisEnviar = async (req: Request, res: Response): Promise<void> => {
    let nome = req.body;

    if (nome) {
            await Cliente.create({
                nome
            });
            res.redirect('/teste');
        
}};

export const dadosgerais = ((req: Request,res: Response)=>{
    res.render('pages/dadosgerais')
})

export const teste = ((req: Request,res: Response)=>{
    res.render('pages/teste')
})

export const dadosclinicos = ((req: Request,res: Response)=>{
    res.render('pages/dadosclinicos')
})

export const alteracoeselesoesdospes = ((req: Request,res: Response)=>{
    res.render('pages/alteracoeselesoesdospes')
})

export const formatodasunhas = ((req: Request,res: Response)=>{
    res.render('pages/formatodasunhas')
})

export const alteracoeselesoes2 = ((req: Request,res: Response)=>{
    res.render('pages/alteracoeselesoes2')
})

export const comentarioseobservacoes = ((req: Request,res: Response)=>{
    res.render('pages/comentarioseobservacoes')
})

export const login = ((req: Request,res: Response)=>{
    res.render('pages/login')
})