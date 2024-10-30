import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../recoil/atoms';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addTodo = () => {
    setTodoList((oldList) => [
      ...oldList,
      { id: Date.now(), title, isComplete: false },
    ]);
    setTitle('');
  };

  return (
    <div className="p-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new todo"
        className="border p-2 mr-2"
      />
      <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2">
        Add
      </button>
    </div>
  );
};

export default AddTodo;
