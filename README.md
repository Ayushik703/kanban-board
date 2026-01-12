# Kanban Board (React)

A simple Kanban Board application built using **React (JSX)** with clean component structure and basic HTML5 Drag & Drop support.  
The project focuses on readability, reusable components, and thoughtful UX behavior.

---

## 📁 Project Structure

├── public
│
├── src
│ ├── assets
│ │
│ ├── component
│ │ ├── Card
│ │ │ ├── Card.jsx
│ │ │ └── Card.css
│ │ │
│ │ ├── Column
│ │ │ ├── Column.jsx
│ │ │ └── Column.css
│ │ │
│ │ └── KanbanBoard
│ │ ├── KanbanBoard.jsx
│ │ └── KanbanBoard.css
│ │
│ ├── styles
│ │ └── global.css
│ │
│ ├── App.jsx
│ └── main.jsx


---

## 🧩 Component Overview

### **KanbanBoard**
- Acts as the main board container
- Manages the global state of all cards
- Handles moving cards between columns

### **Column**
- Represents a single column (Todo / In Progress / Done)
- Filters cards based on status
- Handles drop events for drag & drop

### **Card**
- Represents an individual task
- Supports drag, inline editing, and input validation
- Applies UX rules based on task status

Each component has its own CSS file for better separation of concerns.

---

## ✨ Features

- Three default columns:
  - Todo
  - In Progress
  - Done
- Add tasks to any column
- Inline editing of task titles
- Drag & drop cards between columns
- Responsive layout (desktop & mobile)
- UX rules:
  - New task opens directly in edit mode
  - Empty tasks are automatically discarded
  - Tasks in Done column cannot be edited or deleted
  - Column colors reflect task status

---

## 🛠️ Tech Stack

- React (JSX)
- JavaScript (ES6)
- HTML5 Drag & Drop API
- CSS + Bootstrap (layout only)
- Vite
