function Student()
{
    const name = "Hubert Kukla";
    const atendedclass = "4P";
    const specialization = "Porgramista";


    return(
    <>
            <h3>Imię i Nazwisko: {name}</h3>
            <p>Klasa: {atendedclass}</p>
            <p>Specjalizacja: {specialization}</p>
        
    </>
    );


}

export default Student