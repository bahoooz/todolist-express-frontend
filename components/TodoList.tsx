"use client";

import React, { useEffect, useState } from "react";
import ItemTodo from "./ItemTodo";
import InputCreateItem from "./InputCreateItem";
import { useItemStore } from "@/lib/store/itemStore";

export default function TodoList() {
  const { items, fetchItems } = useItemStore();
  const [isLoading, setIsLoading] = useState(true);
  const remainingCount = items.filter((item) => !item.completed).length;

  useEffect(() => {
    fetchItems();
    setIsLoading(false);
  }, []);

  return (
    <div className="flex flex-col gap-4 w-[500px]">
      <InputCreateItem />
      {isLoading ? (
        <p>Chargement en cours...</p>
      ) : items.length === 0 ? (
        <p>Aucune tâche créée</p>
      ) : (
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <ItemTodo key={item.id} {...item} />
          ))}
        </div>
      )}
      {items.length > 0 && (
        <p>
          {remainingCount} tâche{remainingCount > 1 ? "s" : ""} à faire
        </p>
      )}
    </div>
  );
}
