import React from "react";
import Tour from "../Components/Tour";
const Tours = ({ tours, removeTour, fetchTours }) => {
  return (
    <section className="tours">
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
      <button className="btn" onClick={() => fetchTours()}>
        refresh
      </button>
    </section>
  );
};

export default Tours;
