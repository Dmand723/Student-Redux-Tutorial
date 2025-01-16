import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementAsync,
  incrementAsync,
} from "../state/counter/counterSlice";
import React, { useState } from "react";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const status = useSelector((state: RootState) => state.counter.status);
  const dispatch = useDispatch<AppDispatch>();
  const [numberBy, setIncrementBy] = useState<number>(0);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncrementBy(Number(e.target.value));
  };
  return (
    <div>
      <h2>{count}</h2>
      <p>{status}</p>
      <div>
        <input
          type="number"
          name="numberBy"
          id="numberBy"
          value={numberBy}
          onChange={handleInputChange}
          min="0"
        />
        <button onClick={() => dispatch(incrementAsync(numberBy))}>
          Increment
        </button>
        <button onClick={() => dispatch(decrementAsync(numberBy))}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
