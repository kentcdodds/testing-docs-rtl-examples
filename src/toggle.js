import React, { useState } from "react";
export default function Toggle({ initial = false, onChange }) {
  const [state, setState] = useState(initial);
  return (
    <button
      onClick={() => {
        setState(previousState => !previousState);
        onChange(!state);
      }}
    >
      {state === true ? "Turn off" : "Turn on"}
    </button>
  );
}
