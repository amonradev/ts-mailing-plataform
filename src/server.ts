import express from 'express';
import { Router, Request, Response } from 'express';

const app = express();

const route = Router();

app.use(express.json());

route.get('/', (req: Request, res: Response) => {
    res.json({message: 'Hello!!'});
});

app.use(route);

const PORT = 4444;

app.listen(PORT, () => 'Server running on port: ' + PORT);
console.log('Server running on port: ' + PORT);