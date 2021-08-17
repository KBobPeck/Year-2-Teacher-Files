import React from "react";
const List = ({ people, remove }) => {
  return people.map((person) => {
    const { id, name, age, image } = person;
    return (
      <article key={id} className="list">
        <img src={image} alt={name} />
        <div style={{ position: "relative" }}>
          <h4>{name}</h4>
          <p>{age} years</p>
          <button
            style={{
              width: "6.5rem",
              position: "absolute",
              right: 0,
              bottom: "25%",
            }}
            onClick={() => {
              remove(id);
            }}
          >
            Remove
          </button>
        </div>
      </article>
    );
  });
};

export default List;
