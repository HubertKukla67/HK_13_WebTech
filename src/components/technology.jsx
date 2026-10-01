<<<<<<< HEAD
=======
<<<<<<< HEAD
function Technology(props) {
  return (
    <section>

      <h2>{props.name}</h2>

      <p>
        Kategoria: {props.category}
      </p>

      <p>
        Liczba godzin: {props.hours}
      </p>

    </section>
=======
>>>>>>> temp-changes
function Technology({ name, category, hours }) {
  return (
    <section>
      <h2>{name}</h2>
      
      <p>Kategoria: {category}</p>
      <p>Liczba godzin: {hours}</p>
      
      </section>
    
<<<<<<< HEAD
=======
>>>>>>> ef209ab (React_05_Biblioteka)
>>>>>>> temp-changes
  );
}

export default Technology;