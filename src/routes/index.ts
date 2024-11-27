import {Router, Request, Response} from "express";
import * as HomeController from '../controllers/homeController'


const router = Router()

router.get('/',HomeController.home)

router.get('/dadospessoais', HomeController.dadospessoais)

router.get('/dadosgerais', HomeController.dadosgerais)

router.get('/dadosclinicos',HomeController.dadosclinicos)

router.get('/alteracoeselesoesdospes', HomeController.alteracoeselesoesdospes)

router.get('/formatodasunhas', HomeController.formatodasunhas)

router.get('/alteracoeselesoes2', HomeController.alteracoeselesoes2)

router.get('/comentarioseobservacoes', HomeController.comentarioseobservacoes)

router.get('/login', HomeController.login)

export default router