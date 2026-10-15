import { useState } from "react";

function Technology({ name, category, hours, image}) {

  const [likes, setLikes] = useState(0);

  return (
    <section>
      <img src={image}/>
      <h3>{name}</h3>
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