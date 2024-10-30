import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../recoil/atoms';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addTodo = () => {
    if (title.trim()) {
      setTodoList((oldList) => [
        ...oldList,
        { id: Date.now(), title, isComplete: false },
      ]);
      setTitle('');
    }
  };

  return (
    <div className="p-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Memorize the dictionary"
        className="border border-gray-300 p-2 mr-2"
      />
      <button onClick={addTodo} className="bg-customPurple text-white px-4 py-2 rounded">
        Add Item
      </button>
    </div>
  );
};

export default AddTodo;
