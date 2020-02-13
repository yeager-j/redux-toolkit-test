import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { addTodo } from './store/todos';

const App = () => {
    const todos = useSelector((state: RootState) => state.todo);

    useEffect(() => {
        console.log(' add todo');
        addTodo({ id: 1, text: 'hello world' });
    }, []);

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    return (
        <div className="App">
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>text</th>
                    <th>completed</th>
                </tr>

                </thead>
                <tbody>
                {todos.map(t => (<tr key={t.id}>
                    <td>{t.id}</td>
                    <td>{t.text}</td>
                    <td>{'' + t.completed}</td>
                </tr>))}
                </tbody>
            </table>
        </div>
    );
};

export default App;
