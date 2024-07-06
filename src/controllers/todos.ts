import { RequestHandler } from "express";

import { Todo } from "../models/todo";

// TODOS array to manage our todo list in memory
const TODOS: Todo[] = [];

export const createTodo:RequestHandler = (req, res, next) => {
   const name = (req.body as {name: string}).name;
   console.log(name)
   const newTodo = new Todo(Math.random().toString(), name);
   TODOS.push(newTodo); 
   res.status(201).json({message: 'Created the todo.', createdTodo: newTodo});
};