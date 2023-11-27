import express, { Application } from 'express';
import 'dotenv/config';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { rootRouter } from './src/routes';
import { createPool } from './src/db';

createPool({
  maxConnections: 5,
  host: String(process.env.DB_HOST),
  user: String(process.env.DB_USER),
  password: String(process.env.DB_PASS),
  database: String(process.env.DB_DATABASE),
});

const app: Application = express();

const port = process.env.PORT || 8000;

app.disable('x-powered-by');
app.use(express.json());
app.use(morgan('dev'));
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.redirect('/api');
});
app.use('/api', rootRouter);
