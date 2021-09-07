import List from "./components/List";
import data from "./data";
import React, { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} remove={removePerson} />
        <div className="buttons">
          <button onClick={() => setPeople([])}>Clear All</button>
          <button onClick={() => setPeople(data)}>Reset</button>
        </div>
      </section>
    </main>
  );
}

export default App;
