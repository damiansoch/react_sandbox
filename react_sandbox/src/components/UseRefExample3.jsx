import { useState } from 'react';
import ToDo from './ToDo';

const UseRefExample3 = () => {
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div>
      {showTodo && <ToDo />}
      <button
        className="btn btn-primary"
        onClick={() => {
          setShowTodo(!showTodo);
        }}
      >
        Toggle Todo
      </button>
    </div>
  );
};

export default UseRefExample3;
