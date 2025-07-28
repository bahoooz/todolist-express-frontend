"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Boxes, Pencil, Plus } from "lucide-react";
import ColorMenu from "./ColorMenu";
import { useItemStore } from "@/lib/store/itemStore";

export default function InputCreateItem() {
  const { createItem } = useItemStore();
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("#e2e2e2");
  const [colorMenu, setColorMenu] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    createItem && (await createItem(title, quantity, color));
    setTitle("");
    setQuantity(1);
    setColor("#e2e2e2");
    setColorMenu(false);
  };

  return (
    <form className="flex items-end gap-8" onSubmit={handleSubmit}>
      <Input
        placeholder="Ajouter une nouvelle tâche"
        className="border-t-0 border-x-0 rounded-none shadow-none border-b-2 border-gray-500"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-1">
          <Pencil className="max-h-5 max-w-5" strokeWidth={2} />
          <div className="relative">
            {colorMenu && (
              <ColorMenu
                onChange={(color) => {
                  setColor(color);
                }}
              />
            )}
            <div
              style={{ backgroundColor: color }}
              onClick={() => setColorMenu(!colorMenu)}
              className="h-8 w-8 rounded-full hover:scale-95 hover:bg-gray-200 transition-all duration-200 flex justify-center items-center cursor-pointer"
            ></div>{" "}
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Boxes className="max-h-6 max-w-6" strokeWidth={1.3} />
          <Input
            min={1}
            max={99}
            maxLength={2}
            value={quantity}
            onChange={(e) => {
              setQuantity(Number(e.target.value));
              quantity === 0 && setQuantity(1);
            }}
            type="number"
            className="w-8 h-8 p-0 numberQuantity text-center text-black bg-white"
            onClick={() => setColorMenu(false)}
          />
        </div>

        <Button type="submit">
          <Plus />
        </Button>
      </div>
    </form>
  );
}
