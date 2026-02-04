"use client";

import React, { useState, useEffect } from "react";
import Profile from "./profile";

// New Method: Functional Component
export default function Counter() {
  const [count, setCount] = useState(0);
  // User Related Local State
  const [age, setAge] = useState(28);
  const [name, setName] = useState("Taylor");
  const [todos, setTodos] = useState(() => createTodos());

  function createTodos() {
    return ["Reading a Book", "Watching a Movie"];
  }

  async function handleUpdate() {
    setAge((prevVal) => prevVal + 5);
    setName("John");
    setTodos(["Practice Swimming, Go to School"]);

    // Log after update
    console.log("Data: ", { age, name, todos });
  }

  // Example 01
  // UseEffect with No Dependencies
  // Usage: Initial Render / Re-Render
  useEffect(() => {
    console.log("UseEffect 1 Triggered!");
  });

  // Example 02
  // UseEffect with Empty Dependency Array
  // Usage: Only Runs On Initial Render
  useEffect(() => {
    console.log("UseEffect 2 Triggered!");
  }, []);

  // Example 03
  // UseEffect with Dependency Array
  // Usage: Component Props Update
  useEffect(() => {
    console.log("UseEffect 3 Triggered!", { name, age, todos });
  }, [age, name, todos]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="border border-primary py-1 px-2 text-sm rounded-2xl"
      >
        Increment
      </button>

      <Profile />

      <div className="bg-green-200 p-6 rounded">
        <h2 className="font-bold text-lg">UseState Hook:</h2>
        <ul>
          <li>Age: {age}</li>
          <li>Name: {name}</li>
          <li>Todos: {todos.join(", ")}</li>
        </ul>

        <button
          onClick={handleUpdate}
          className="bg-primary rounded text-sm px-4 py-2 mt-4 cursor-pointer"
        >
          Update User
        </button>
      </div>
    </div>
  );
}
