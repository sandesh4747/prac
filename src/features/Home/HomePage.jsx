import React, { useCallback, useEffect, useMemo, useState } from "react";
import Child from "./Child";
import { Button, Typography } from "@material-tailwind/react";

export default function HomePage() {
  const [count, setCount] = useState(0);
  const handleChange = useCallback(() => {
    console.log("hello jee");
    handleCount();
  }, []);
  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  console.log("parent render");
  return (
    <div className="space-y-5">
      <h1>{count}</h1>

      <Button onClick={handleCount}>Increment</Button>

      <Child handleChange={handleChange} />
    </div>
  );
}
