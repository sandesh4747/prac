import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";
import { Button, Typography } from "@material-tailwind/react";

export default function HomePage() {
  const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);

  const handleCount1 = () => {
    setCount1((prev) => prev + 1);
  };

  // const handleCount2 = () => {
  //   setCount2((prev) => prev - 1);
  // };

  //heavy function
  // const dependonCount1 = useMemo(() => {
  // for (let i = 0; i < 1000000000; i++) {

  // }
  //   console.log("Function Run");
  //   return count1 * 9;
  // }, [count1]);

  console.log("parent render");
  const handleSome = useCallback(() => {
    console.log("hello");
  }, [count1]);

  return (
    <div className="space-y-5">
      {/* <div>
        <h1>{dependonCount1}</h1>

        <Button size="sm" onClick={handleCount1}>
          Increment
        </Button>
        <h1>This is Home </h1>
        <Typography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
          quas!
        </Typography>
      </div> */}
      {/* <div>
        <h1>Count2: {count2}</h1>
        <Button size="sm" onClick={handleCount2}>
          Decrement
        </Button>
        <h1>This is Home </h1>
        <Typography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
          quas!
        </Typography>
      </div> */}
      <Button onClick={handleCount1}>Increment</Button>
      <hr />
      <Child handleSome={handleSome} />
    </div>
  );
}
