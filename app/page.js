"use client";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!title || !description) return alert("Please fill all fields!");

    const newTodo = {
      id: todos.length + 1,
      title,
      description,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">

        <h1 className="text-2xl font-bold mb-4 text-center">Simple Todo</h1>

        {/* Input Area */}
        <div className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter title"
            className="border p-2 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Enter description"
            className="border p-2 rounded-md h-24 resize-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <button
            className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            onClick={addTodo}
          >
            Add
          </button>
        </div>

        {/* Table */}
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Description</th>
            </tr>
          </thead>

          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td className="border p-2">{todo.id}</td>
                <td className="border p-2">{todo.title}</td>
                <td className="border p-2">{todo.description}</td>
              </tr>
            ))}

            {todos.length === 0 && (
              <tr>
                <td className="text-center p-3 text-gray-500" colSpan="3">
                  No data yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </div>
  );
}
