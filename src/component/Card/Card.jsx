import React, { useState } from "react";

export const Card = ({ card, deleteCard, updateTitle }) => {
  const [isEditing, setIsEditing] = useState(card.isNew || false);
  const [text, setText] = useState(card.title);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("cardId", card.id);
  };

 const saveTitle = () => {
  const trimmedText = text.trim();

  if (trimmedText === "") {
    deleteCard(card.id);
    return;
  }

  updateTitle(card.id, trimmedText);
  setIsEditing(false);
};


  return (
    <div className={`card mb-2 p-2 ${card.status === "done" ? "read-only" : ""}`} draggable onDragStart={handleDragStart}>
      {isEditing ? (
        <input
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={saveTitle}
          autoFocus
        />
      ) : (
        <div
          onDoubleClick={() => {
            if (card.status !== "done") {
              setIsEditing(true);
            }
          }}
        >
          {card.title}
        </div>
      )}

      {card.status !== "done" && (
        <button
          className="btn btn-sm btn-danger mt-2"
          onClick={() => deleteCard(card.id)}
        >
          Delete
        </button>
      )}
    </div>
  );
};
