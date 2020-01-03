import React from "react";

export default function Button({ children, ...buttonProps }) {
  return (
    <button
      className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full"
      {...buttonProps}
    >
      {children}
    </button>
  );
}
