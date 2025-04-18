import React, { memo } from "react";

export default memo(function Child({ handlesome }) {
  console.log("child render");

  return (
    <div>
      <h1></h1>
      <h1>Child Render</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, inventore,
        in fuga dolor accusamus enim, doloremque molestias nulla saepe omnis
        placeat doloribus sit! Nemo, repudiandae. Totam, optio nam! Quia, rem?
      </p>
    </div>
  );
});
