import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import todoRoutes from './routes/todos';

const app = express();

// middleware that parses the body of the request
app.use(json())

// forward all requests that start with '/todos' to the todoRoutes router
app.use('/todos', todoRoutes);

// error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
})

app.listen(3000);