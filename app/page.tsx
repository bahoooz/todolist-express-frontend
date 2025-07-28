import TodoList from "@/components/TodoList";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center justify-center h-full">
        <div>
          <h1 className="mb-8 text-2xl">Todolist Next.js x Express.js</h1>
          <TodoList />
        </div>
      </div>
    </div>
  );
}
