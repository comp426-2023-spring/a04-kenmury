import express from 'express';
import minimist from 'minimist';
import {RPS, RPSLS} from './lib/rpsls.js';

const args = minimist(process.argv.slice(2));
const port = args.port || args.p || 5000;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/app/', (req, res) => {
    res.status(200).send('200 OK');
})

app.get('/app/rps/', (req, res) => {
    res.status(200).json(RPS());
})

app.get('/app/rpsls/', (req, res) => {
    res.status(200).json(RPSLS());
})

app.post('/app/rps/play/', (req, res) => {
    res.status(200).json(RPS(req.body.shot));
})

app.get('/app/rps/play/:shot', (req, res) => {
    res.status(200).json(RPS(req.params.shot));
})

app.post('/app/rpsls/play/', (req, res) => {
    res.status(200).json(RPSLS(req.body.shot));
})

app.get('/app/rpsls/play/:shot', (req, res) => {
    res.status(200).json(RPSLS(req.params.shot));
})

app.get('/app/rps/play/', (req, res) => {
    res.status(200).json(RPS(req.query.shot));
})






app.listen(port);