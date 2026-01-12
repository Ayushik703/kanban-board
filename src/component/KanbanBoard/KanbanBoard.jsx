import React, { useState } from "react";
import {Column} from "../Column/Column.jsx";

export const KanbanBoard = () => {
  const [cards, setCards] = useState([
    { id: 1, title: "Design UI", status: "todo" },
    { id: 2, title: "Setup project", status: "inProgress" },
    { id: 3, title: "Deploy app", status: "done" }
  ]);

const addCard = (status) => {
  const newCard = {
    id: Date.now(),
    title: "",
    status,
    isNew: true
  };

  setCards([...cards, newCard]);
};


  const deleteCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

const updateTitle = (id, newTitle) => {
  setCards(
    cards.map(card =>
      card.id === id
        ? { ...card, title: newTitle, isNew: false }
        : card
    )
  );
};


  const moveCard = (id, newStatus) => {
    setCards(
      cards.map(card =>
        card.id === id ? { ...card, status: newStatus } : card
      )
    );
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Kanban Board</h3>

      <div className="row">
        <Column
          title="Todo"
          status="todo"
          cards={cards}
          addCard={addCard}
          deleteCard={deleteCard}
          updateTitle={updateTitle}
          moveCard={moveCard}
        />

        <Column
          title="In Progress"
          status="inProgress"
          cards={cards}
          addCard={addCard}
          deleteCard={deleteCard}
          updateTitle={updateTitle}
          moveCard={moveCard}
        />

        <Column
          title="Done"
          status="done"
          cards={cards}
          addCard={addCard}
          deleteCard={deleteCard}
          updateTitle={updateTitle}
          moveCard={moveCard}
        />
      </div>
    </div>
  );
};

