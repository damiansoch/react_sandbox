import { useState, useEffect, useRef } from 'react';

const ToDo = () => {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});

  const isMonted = useRef(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (isMonted.current) {
            setTodo(data);
            setLoading(false);
          }
        }, 3000);
      });
    return () => {
      isMonted.current = false;
    };
  }, [isMonted]);

  return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>;
};

export default ToDo;
