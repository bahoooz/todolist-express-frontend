"use client";

import React, { useEffect, useState } from "react";
import ItemTodo from "./ItemTodo";
import InputCreateItem from "./InputCreateItem";
import { useItemStore } from "@/lib/store/itemStore";

export default function TodoList() {
  const { items, fetchItems } = useItemStore();
  const [isLoading, setIsLoading] = useState(true);

  const remainingCount = Array.isArray(items)
    ? items.filter((item) => !item.completed).length
    : 0;

  useEffect(() => {
    fetchItems().finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="flex flex-col gap-4 w-screen px-4 sm:w-[500px]">
      <InputCreateItem />
      {isLoading ? (
        <p>Mise en route du serveur Node.js...</p>
      ) : Array.isArray(items) && items.length === 0 ? (
        <p>Aucune tâche créée</p>
      ) : (
        <div className="flex flex-col gap-2">
          {Array.isArray(items) &&
            items.map((item) => <ItemTodo key={item.id} {...item} />)}
        </div>
      )}
      {Array.isArray(items) && items.length > 0 && (
        <p>
          {remainingCount} tâche{remainingCount > 1 ? "s" : ""} à faire
        </p>
      )}
    </div>
  );
}
