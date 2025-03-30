import React from "react";
import { useParams } from "react-router-dom";

export default function CategoryItems() {
  const m = useParams();
  console.log(m);
  return (
    <div>
      <h1>items Page</h1>
    </div>
  );
}
