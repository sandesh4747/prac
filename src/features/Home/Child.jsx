import { Button } from "@material-tailwind/react";
import React, { memo } from "react";

export default memo(function Child({ handleChange }) {
  console.log("child render");

  return (
    <div>
      <Button onClick={handleChange}>Click TO</Button>

      <h1>Child Render</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
        accusamus, amet aliquid itaque omnis ducimus? Porro aspernatur, commodi
        a natus id est aliquid fugit inventore impedit doloremque doloribus vero
        placeat.
      </p>
    </div>
  );
});
