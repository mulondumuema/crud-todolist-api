import { RequestHandler } from "express";

import { Todo } from "../models/todo";
import { error } from "console";

// TODOS array to manage our todo list in memory
const TODOS: Todo[] = [];

export const createTodo:RequestHandler = (req, res, next) => {
   const name = (req.body as {name: string}).name;
   const newTodo = new Todo(Math.random().toString(), name);
   TODOS.push(newTodo); 
   res.status(201).json({message: 'Created the todo.', createdTodo: newTodo});
};

export const getTodos: RequestHandler = (req, res, next) => {
    res.json({todos: TODOS});
};

export const updateTodo: RequestHandler<{id:string}> = (req, res, next) => {
    const todoId = req.params.id;
    const updatedName = (req.body as { name: string }).name;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

    if(todoIndex < 0) {
        throw new Error('Could not find todo.');
    }

    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedName);
    res.json({ message: 'Updated.', updatedTodo: TODOS[todoIndex] });
}

export const deleteTodo: RequestHandler<{id:string}> = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

    if(todoIndex < 0) {
        throw new Error('Could not find todo.');
    }

    TODOS.splice(todoIndex, 1);
    res.json({message: 'Todo Deleted.'});
}