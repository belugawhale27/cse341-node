import express, {Application} from 'express';

import routes from './routes/index.js';

const app: Application = express();

const port: number = Number(process.env.PORT) || 8080;

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
