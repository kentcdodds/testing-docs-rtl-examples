import React, { useEffect } from "react";

export default function Card({ onSelect }) {
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      onSelect(null);
    }, 5000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [onSelect]);
  return [1, 2, 3, 4].map(choice => (
    <button
      key={choice}
      data-testid={`card-button-${choice}`}
      onClick={() => onSelect(choice)}
    >
      {choice}
    </button>
  ));
}
