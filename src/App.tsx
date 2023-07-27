import React, { useState,useEffect,useContext } from "react";

import "./App.css";
import HomePage from "./components/pages/HomePage";

import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
// import InputField from './components/InputField';
// import { Todo } from './model';
// import TodoList from './components/TodoList';
// import { DragDropContext,DropResult } from 'react-beautiful-dnd';



const App: React.FC = () => {
  // const [count ,setCount ] = useState(0 as number)
  // const increment=()=>{
  //   setCount(count+1);
  // }
  // const decrement=()=>{

  //   if(count === 0){
  //     setCount(0)
  //   }else{ 
  //     setCount(count-1);
  //   }

  // } 
  return(
    <>
      {/* <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button> */}
     <useContextHook/>
    </>
  ) 
};

export default App;

  // const [ todo, setTodo ] = useState<string>("");
  // const [ todos, setTodos ] = useState<Todo[]>([])
  // const [ completedTodos, setCompletedTodos ] = useState<Todo[]>([]);
  // const handleAdd = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (todo) {
  //     setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
  //     setTodo("");
  //   }
  // };

  // const onDragEnd = (result: DropResult) => {
  //   const { destination, source } = result;

  //   console.log(result);

  //   if (!destination) {
  //     return;
  //   }

  //   if (
  //     destination.droppableId === source.droppableId &&
  //     destination.index === source.index
  //   ) {
  //     return;
  //   }

  //   let add;
  //   let active = todos;
  //   let complete = completedTodos;
  //   // Source Logic
  //   if (source.droppableId === "TodosList") {
  //     add = active[source.index];
  //     active.splice(source.index, 1);
  //   } else {
  //     add = complete[source.index];
  //     complete.splice(source.index, 1);
  //   }

  //   // Destination Logic
  //   if (destination.droppableId === "TodosList") {
  //     active.splice(destination.index, 0, add);
  //   } else {
  //     complete.splice(destination.index, 0, add);
  //   }

  //   setCompletedTodos(complete);
  //   setTodos(active);
  // };

  // return (
  //   <DragDropContext onDragEnd={onDragEnd}>
  //     <div className="App">
  //       <span className="heading">Taskify</span>
  //       <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
  //       <TodoList
  //         todos={todos}
  //         setTodos={setTodos}
  //         completedTodos={completedTodos}
  //         setCompletedTodos={setCompletedTodos}
  //       />
  //     </div>
  //   </DragDropContext>