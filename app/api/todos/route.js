let todos = []; // TEMP memory (disappears when server restarts)

export async function GET() {
  return Response.json({
    success: true,
    data: todos,
  });
}

export async function POST(req) {
  const { title, description } = await req.json();

  if (!title) {
    return Response.json(
      { success: false, message: "Title is required" },
      { status: 400 }
    );
  }

  const newTodo = {
    id: todos.length + 1,
    title,
    description: description || "",
    status: "Pending",
  };

  todos.push(newTodo);

  return Response.json({
    success: true,
    data: newTodo,
  });
}

export async function DELETE(req) {
  const { id } = await req.json();

  todos = todos.filter((todo) => todo.id !== id);

  return Response.json({
    success: true,
    message: "Todo deleted",
  });
}
