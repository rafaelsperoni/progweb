const express = require('express')

var cursos = [
    {
        id: 1,
        nome: "TSI EaD",
        semestres: 5,
        coordenador: "Joice Seleme Mota"
    },
    {
        id: 2,
        nome: "BSI",
        semestres: 8,
        coordenador: "Aujor Tadeu Andrade"
    }
]

function getCurso(id){
    return cursos[id-1]
}

app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.send('ola')
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))

app.get('/cursos', (req, res) => {
    res.render('cursos', { cursos: cursos })
})

app.get('/cursos/:id', (req, res) => {
    if(req.params.id == 'novo'){
        dados = {
            operacao : 'Inclusão',
            action : '../cursoinsert',
            curso: null
        }
        res.render('cursoform', { dados: dados })    
    }else{
        curso = getCurso(req.params.id)
        res.render('curso', {curso: curso})
    }
})

app.post('/cursoinsert', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.get('/alteracurso/:id', (req, res) => {
    dados = {
        operacao : 'Inclusão',
        action : 'alteracurso',
        curso: getCurso(req.params.id)
    }
    res.render('cursoform', { dados: dados })            
})

app.post('/alteracurso', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.listen('3000', () => {
    console.log('Servidor rodando na porta 3000');
})