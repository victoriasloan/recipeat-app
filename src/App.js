import React from "react";
import Button from "./components/button";

function App() {
  return (
    <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
      <h1>Landing page :)</h1>
      <Button onClick={() => console.log("Test tailwindcss button clicked")}>
        Recipeat tailwind button
      </Button>
    </div>
  );
}

export default App;
