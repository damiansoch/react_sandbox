import { useState, useEffect, useRef } from 'react';

const UseRefExample2 = () => {
  const renders = useRef(1);
  const prevName = useRef('');

  const [name, setName] = useState('');

  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2>PrevName State: {prevName.current}</h2>
      <input
        type="text"
        value={name}
        className="form-control mb-3"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
};

export default UseRefExample2;
