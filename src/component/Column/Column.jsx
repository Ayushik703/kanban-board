import React from "react";
import {Card} from "./../Card/Card.jsx";
import "./Column.css";

export const Column = ({
  title,
  status,
  cards,
  addCard,
  deleteCard,
  updateTitle,
  moveCard
}) => {
  const handleDrop = (e) => {
    const cardId = Number(e.dataTransfer.getData("cardId"));
    moveCard(cardId, status);
  };

  return (
    <div
      className="col-md-4 col-sm-12 mb-3"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <div className={`kanban-column ${status}`}>
        <h5 className="text-center">{title}</h5>

        {cards
          .filter(card => card.status === status)
          .map(card => (
            <Card
              key={card.id}
              card={card}
              deleteCard={deleteCard}
              updateTitle={updateTitle}
            />
          ))}

        <button
          className="btn btn-sm btn-primary w-100 mt-2"
          onClick={() => addCard(status)}
        >
          + Add Card
        </button>
      </div>
    </div>
  );
};
