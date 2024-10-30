import React from 'react';
import { RecoilRoot } from 'recoil';
import AddTodo from '../components/AddTodo/AddTodo';
import TodoList from '../components/TodoList/TodoList';

const App = () => {
  return (
    <RecoilRoot>
      <div className="max-w-lg mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4 ml-2">Todo List</h1>
        <TodoList />
        <AddTodo />
      </div>
    </RecoilRoot>
  );
};

export default App;
