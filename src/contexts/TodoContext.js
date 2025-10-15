import {useContext, createContext} from 'react';

export const TodoContext = createContext({
    todos : [
        {
            id: 1,
            todo: "Learn React",
            isCompleted: false
        }
    ],

    addTodo: (todo) => {},
    editTodo: (id, newTodo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {}
})

export const TodoProvider = TodoContext.Provider

export default function useTodo(){
    return useContext(TodoContext)
}