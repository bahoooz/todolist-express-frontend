import Credits from "@/components/Credits";
import TodoList from "@/components/TodoList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-dvh">
      <div className="flex flex-col items-center justify-center h-full relative">
        <div>
          <h1 className="mb-8 text-xl sm:text-2xl px-4 flex items-center"><Image src={"/assets/logo.png"} width={1024} height={1024} alt="logo" className="size-12" /> Todolist Next.js x Express.js</h1>
          <TodoList />
        </div>
        <Credits />
      </div>
    </div>
  );
}
