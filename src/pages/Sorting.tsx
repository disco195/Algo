import React, { useState } from "react";
import { BarsContainer } from "../components";

export function Sorting() {
  const [values, setValues] = useState(randomValues());

  return (
    <div>
      <BarsContainer values={values} />
      <div>
        <div>
          <p>Create</p>
          <button
            onClick={() => {
              setValues(randomValues());
            }}
          >
            Random
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sorting;

function randomValues(): number[] {
  const count = Math.floor(Math.random() * 35 + 5);
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(Math.floor(Math.random() * 100 + 1));
  }
  return arr;
}
