import { create } from "zustand";
import { Item } from "../types";

type ItemStore = {
  items: Item[];
  fetchItems: () => Promise<void>;
  createItem?: (
    title: string,
    quantity: number,
    color: string
  ) => Promise<void>;
  deleteItem?: (id: number) => Promise<void>;
  updateItem?: (id: number, data: Partial<Item>) => Promise<void>;
};

export const useItemStore = create<ItemStore>((set) => ({
  items: [],

  fetchItems: async () => {
    const res = await fetch("http://localhost:4000/items", {
      method: "GET",
    });
    const data = await res.json();
    set({ items: data.items });
  },

  createItem: async (title, quantity, color) => {
    const res = await fetch("http://localhost:4000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, quantity, color }),
    });
    const data = await res.json()
    console.log("item créé :", data)
    await useItemStore.getState().fetchItems();
  },

  deleteItem: async (id) => {
    await fetch(`http://localhost:4000/items/${id}`, {
      method: "DELETE",
    });
    await useItemStore.getState().fetchItems();
  },

  updateItem: async (id, updatedFields) => {
    await fetch(`http://localhost:4000/items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFields),
    });
    await useItemStore.getState().fetchItems();
  },
}));