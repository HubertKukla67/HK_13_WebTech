import { useState } from "react";

function Technology({ name, category, hours }) {

  const [likes, setLikes] = useState(0);

  return (
    <section>
      <h2>{name}</h2>
      <p>Kategoria: {category}</p>
      <p>Liczba godzin: {hours}</p>

      <p>Polubienia: {likes}</p>

      <button onClick={() => setLikes(likes + 1)}>
        Lubię
      </button>
    </section>
  );
}

export default Technology