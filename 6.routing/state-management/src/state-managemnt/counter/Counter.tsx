import useCounterStrore from "./store";

const Counter = () => {
	// const store = useCounterStrore()
	const {counter, max,increment, reset } = useCounterStrore()
	

  return (
		<div>
			counter: ({ counter})
			counter: ({ max})

      <button
onClick={()=>increment()}
className="btn btn-primary mx-1"
>
        Increment
      </button>
      <button
				onClick={()=>reset()}

        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
