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
    <div className="p-4 py-1">
      <div className="h-px bg-gray-300 w-full ml-8 mb-2" />
      <div className="flex items-center w-full">
        <span
          className="flex h-5 w-5 rounded-full border-2 border-customPurple flex-shrink-0 bg-customPurple text-white items-center justify-center mr-2 cursor-pointer"
          onClick={addTodo} 
        >
          +
        </span>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Memorize the dictionary" 
          className="border-none p-1.5 flex-grow mr-2"
        />
        <button 
          onClick={addTodo} 
          className="bg-customPurple text-white px-5 py-1.5 rounded flex-shrink-0 mr-[-32px]"
        >
          Add Item
        </button>
      </div>
      <div className="h-px bg-gray-300 w-full ml-8 mt-2" />
    </div>
  );
};

export default AddTodo;
