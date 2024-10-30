import AddTodo from '../components/AddTodo/AddTodo';
import TodoList from '../components/TodoList/TodoList';

const App = () => (
  <div className="max-w-md mx-auto mt-10">
    <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
    <TodoList />
    <AddTodo />
  </div>
);

export default App;