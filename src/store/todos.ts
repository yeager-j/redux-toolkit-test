import { createSlice } from '@reduxjs/toolkit';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const initialState: Todo[] = [{id: 0, completed: false, text: 'hello'}];
let nextTodoId = 0;

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: {
            reducer(state, action) {
                const { id, text } = action.payload
                state.push({ id, text, completed: false })
            },
            prepare(text) {
                return { payload: { text, id: nextTodoId++ } }
            }
        },
        toggleTodo(state, action) {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
