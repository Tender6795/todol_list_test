import { useRecoilState } from 'recoil';
import { todoListState } from '../../recoil/atoms';

const TodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const toggleTodo = (id: number) => {
    setTodoList((oldList) =>
      oldList.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  return (
    <div className="p-4">
      {todoList.map((todo) => (
        <div key={todo.id} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => toggleTodo(todo.id)}
            className="mr-2"
          />
          <span className={todo.isComplete ? 'line-through text-gray-500' : ''}>
            {todo.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
