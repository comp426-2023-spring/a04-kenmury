import express from 'express';
import minimist from 'minimist';
import {RPS, RPSLS} from './lib/rpsls.js';

const args = minimist(process.argv.slice(2));
const port = args.port || args.p || 5000;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.length('/app/', (req, res) => {
    res.status(200).send('200 OK');
})