"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  // Fetch todos from API
  const fetchTodos = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    setTodos(data.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add todo
  const addTodo = async () => {
    if (!title) return alert("Title is required");

    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title, description }),
    });

    const data = await res.json();
    if (data.success) {
      setTitle("");
      setDescription("");
      fetchTodos();
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await fetch("/api/todos", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });

    fetchTodos();
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-10">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">

        <h1 className="text-2xl font-bold mb-4">Todo App</h1>

        {/* Input Form */}
        <input
          type="text"
          placeholder="Title"
          className="border p-2 w-full mb-3 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="border p-2 w-full mb-3 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={addTodo}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Todo
        </button>

        {/* Table */}
        <table className="w-full mt-6 border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">ID</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id} className="text-center">
                <td className="border p-2">{todo.id}</td>
                <td className="border p-2">{todo.title}</td>
                <td className="border p-2">{todo.description}</td>
                <td className="border p-2">{todo.status}</td>
                <td className="border p-2">
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
