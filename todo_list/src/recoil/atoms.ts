import { atom } from "recoil";

export interface TodoItem {
  id: number;
  title: string;
  isComplete: boolean;
}

const initialTodoList: TodoItem[] = [
  { id: 1, title: "Learn Recoil", isComplete: false },
  { id: 2, title: "Create a To-Do App", isComplete: false },
];

export const todoListState = atom<TodoItem[]>({
  key: "todoListState", 
  default: initialTodoList,
});
