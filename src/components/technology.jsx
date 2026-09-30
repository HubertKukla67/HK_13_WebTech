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
  );
}

export default Technology;