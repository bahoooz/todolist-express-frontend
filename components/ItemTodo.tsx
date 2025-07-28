"use client";

import { Item } from "@/lib/types";
import React, { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Boxes, Check, Pencil, X } from "lucide-react";
import { Button } from "./ui/button";
import { useItemStore } from "@/lib/store/itemStore";
import { Input } from "./ui/input";
import ColorMenu from "./ColorMenu";

export default function ItemTodo({
  title,
  quantity,
  color,
  id,
  completed,
}: Item) {
  const { deleteItem, updateItem } = useItemStore();
  const [isEdit, setIsEdit] = useState(false);
  const [updateTitle, setUpdateTitle] = useState(title);
  const [updateQuantity, setUpdateQuantity] = useState(quantity);
  const [updateColor, setUpdateColor] = useState(color);
  const [colorMenu, setColorMenu] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <div className="flex justify-between border rounded-md items-center px-4 w-full">
        <div className="flex items-center gap-3 relative">
          {colorMenu && (
            <ColorMenu
              onChange={(color) => {
                setUpdateColor(color);
              }}
              updateColorMenu={true}
            />
          )}
          {!isEdit ? (
            <div
              className="h-6 w-6 rounded-full"
              style={{ backgroundColor: color }}
            ></div>
          ) : (
            <Pencil
              strokeWidth={2}
              className="min-w-6 min-h-6 cursor-pointer"
              style={{ color: updateColor }}
              onClick={() => setColorMenu(!colorMenu)}
            />
          )}
          {quantity > 1 && !isEdit ? (
            <p className="flex items-center gap-1">
              <Boxes strokeWidth={1.5} /> {quantity}
            </p>
          ) : (
            isEdit && (
              <Input
                min={1}
                max={99}
                maxLength={2}
                type="number"
                value={updateQuantity}
                onChange={(e) => setUpdateQuantity(Number(e.target.value))}
                className="w-8 h-8 p-0 numberQuantity text-center text-black bg-white"
              />
            )
          )}
        </div>
        {!isEdit ? (
          <h4 className="capitalize my-4">{title}</h4>
        ) : (
          <Input
            onChange={(e) => setUpdateTitle(e.target.value)}
            value={updateTitle}
            className="max-w-fit max-h-8 my-3 text-center"
          />
        )}
        <div className={`flex items-center ${isEdit ? "gap-1" : "gap-2"}`}>
          {!isEdit ? (
            <>
              <Pencil
                strokeWidth={1.5}
                className="max-w-5 max-h-5 cursor-pointer"
                onClick={() => setIsEdit(!isEdit)}
              />
              <Checkbox
                className="cursor-pointer"
                data-state={completed ? "checked" : "unchecked"}
                onClick={() =>
                  updateItem &&
                  updateItem(Number(id), { completed: !completed })
                }
                checked={completed}
                style={{
                  backgroundColor: completed ? color : undefined,
                  borderColor: completed ? color : undefined,
                }}
              />
            </>
          ) : (
            <>
              <Check
                onClick={() => {
                  updateItem &&
                    updateItem(Number(id), {
                      title: updateTitle,
                      quantity: updateQuantity,
                      color: updateColor,
                    });
                  setColorMenu(false);
                  setIsEdit(false);
                }}
                strokeWidth={1.5}
                className="min-w-6 min-h-6 cursor-pointer"
              />
              <X
                onClick={() => {
                  setIsEdit(false);
                  setColorMenu(false);
                }}
                strokeWidth={1.5}
                className="min-w-6 min-h-6 cursor-pointer"
              />
            </>
          )}
        </div>
      </div>
      <Button
        onClick={() => deleteItem && deleteItem(Number(id))}
        className="bg-gray-100 hover:bg-gray-200"
      >
        <X strokeWidth={2} className="cursor-pointer text-red-500" />
      </Button>
    </div>
  );
}
