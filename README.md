# 🧩 Todolist Frontend – Next.js 15 + Zustand + Tailwind

Interface utilisateur moderne pour la todolist, développée avec **Next.js 15**, **Zustand**, **Tailwind CSS** et **TypeScript**.

---

## 🚀 Stack utilisée

- 🔥 [Next.js 15 (app directory)](https://nextjs.org/)
- 🧠 [Zustand](https://zustand-demo.pmnd.rs/) pour la gestion du state
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🔷 TypeScript
- ✨ UI interactive avec transitions, hover, etc.

---

## 📂 Structure

```
/app
  - page.tsx
  - layout.tsx
/components
  - ColorMenu.tsx
  - InputCreateItem.tsx
  - ItemTodo.tsx
  - TodoList.tsx
/lib
  /store/itemStore.ts  // Zustand
  /types.ts
```

---

## ⚙️ Lancer le frontend

```bash
pnpm install
pnpm dev
```

Le serveur écoute sur [http://localhost:3000](http://localhost:3000)

---

## 🔗 Connecté à l'API backend sur `http://localhost:4000/items`
- Toutes les requêtes `GET`, `POST`, `PATCH`, `DELETE` sont faites via fetch dans Zustand.
- Appels automatiques pour mettre à jour la liste après chaque action.

---

## ✨ Fonctionnalités

- ✅ Créer une tâche avec un titre, une quantité et une couleur
- ✏️ Modifier dynamiquement une tâche
- ✔️ Marquer comme complétée
- 🗑️ Supprimer une tâche
- 🎯 Affichage du nombre de tâches restantes

---

## 🙋‍♂️ À propos

👨‍💻 **Bahoz** – Développeur web fullstack (Next.js / TypeScript / Zustand)  
📍 Paris – [Mon site web](https://bahoz-dev.com)