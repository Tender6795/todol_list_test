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
    <div className="p-4 space-y-4"> {/* Adds vertical space between items */}
      {todoList.map((todo) => (
        <div key={todo.id} className="flex flex-col gap-2">
          {/* Divider above the checkbox and text */}
          <div className="h-px bg-gray-300 w-full" /> 
          <div className="flex items-center">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={todo.isComplete}
                onChange={() => toggleTodo(todo.id)}
                className="hidden" 
              />
              <span
                className={`flex h-5 w-5 rounded-full border-2 border-customPurple flex-shrink-0 
                            ${todo.isComplete ? 'bg-customPurple' : 'bg-white'}`}
              />
              <span className={`ml-2 text-lg ${todo.isComplete ? 'line-through text-gray-500' : ''}`}>
                {todo.title}
              </span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
