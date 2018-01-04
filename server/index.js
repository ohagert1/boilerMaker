import express from 'express';
import morgan from 'morgan';
import path from 'path';
import bodyParser from 'body-parser';
import router from './router';
const app = express();


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

export default app;
