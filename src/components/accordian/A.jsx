import React, { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selection, setSelection] = useState(null); // for single selection
  const [multipleSelection, setMultipleSelection] = useState([]); // for multi
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);

  const handleSingleSelection = (id) => {
    setSelection((prev) => (prev === id ? null : id));
  };

  const handleMultiSelection = (id) => {
    setMultipleSelection((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleSelectionMode = () => {
    setEnableMultipleSelection((prev) => !prev);
    setSelection(null); // reset single
    setMultipleSelection([]); // reset multi
  };

  return (
    <div>
      <button onClick={toggleSelectionMode}>
        {enableMultipleSelection ? "Switch to Single" : "Switch to Multiple"}
      </button>

      {data.map((dataItem) => (
        <div
          key={dataItem.id}
          onClick={() =>
            enableMultipleSelection
              ? handleMultiSelection(dataItem.id)
              : handleSingleSelection(dataItem.id)
          }
        >
          <h3>{dataItem.question}</h3>
          {(enableMultipleSelection
            ? multipleSelection.includes(dataItem.id)
            : selection === dataItem.id) && <p>{dataItem.answer}</p>}
        </div>
      ))}
    </div>
  );
}
