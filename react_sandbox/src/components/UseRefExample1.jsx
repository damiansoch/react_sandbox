import { useRef } from 'react';

const UseRefExample1 = () => {
  const inputRef = useRef();
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current); //gives the dom element
    console.log(inputRef.current.value); //gives the value
    inputRef.current.style.backgroundColor = 'red';

    paraRef.current.innerText = 'Thanks for submitting!';
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control mb-2"
          id="name"
          ref={inputRef}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p
          onClick={() => {
            inputRef.current.focus(); //focus on the input
          }}
          ref={paraRef}
        ></p>
      </form>
    </div>
  );
};

export default UseRefExample1;
