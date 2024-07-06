# CRUD TODO LIST API

This is a typescript nodejs API for a TODO LIST. 

It contains the following functionalities for CRUD:
- Create a todo. This is to add an item to the todo list.
- Read the todo list. This is to get all items in the todo list.
- Update a todo. This is to update an item in the todo list.
- Delete a todo. This is to delete an item from the todo list.

This is meant for the develeopment enviromnent therefore the server is setup to `3000`, to be accessed locally on `http://localhost:3000/`

Note: The todo list is saved on memory so if the server is restarted or closed the data previously added is lost.

## Starting the server
1. Make sure you have typescript and nodejs installed
2. Clone the repo
3. Install the dependencies
```
npm install
```
4. start the server
```
npm start
```

## Example of the endpoints:
### 1. Create: `/todos/create`
The endpoint locally can be reached on: `http://localhost:3000/todos/create`

An example of a request:

```
{
    "name": "Create api"
}
```

The response:
```
{
    "message": "Created the todo.",
    "createdTodo": {
        "id": "0.9381860550732375",
        "name": "Create api"
    }
}
```

Note: the id is set to be randomly generated

### 2. Read: `/todos/read`
The endpoint locally can be reached on: `http://localhost:3000/todos/read`

The response:
```
{
    "todos": [
        {
            "id": "0.9381860550732375",
            "name": "Create api"
        }
    ]
}
```

### 3. Update: `/todos/update/:id`
The endpoint locally can be reached on: `http://localhost:3000/todos/update/:id` where the id should be specified

An example of a request:
the url:
`http://localhost:3000/todos/update/0.9381860550732375`

the request body:
```
{
    "name": "Update api"
}
```

The response:
```
{
    "message": "Updated.",
    "updatedTodo": {
        "id": "0.9381860550732375",
        "name": "Update api"
    }
}
```

### 3. delete: `/todos/delete/:id`
The endpoint locally can be reached on: `http://localhost:3000/todos/delete/:id` where the id should be specified

An example of a request:
the url:
`http://localhost:3000/todos/delete/0.9381860550732375`

The response:
```
{
    "message": "Todo Deleted."
}
```