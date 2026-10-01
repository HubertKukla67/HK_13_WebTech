<<<<<<< HEAD
function Student()
{
    const name = "Hubert Kukla";
    const atendedclass = "4P";
    const specialization = "Porgramista";
=======
function Student({name, atendedclass, age, specialization})
{

>>>>>>> ef209ab (React_05_Biblioteka)


    return(
    <>
            <h3>Imię i Nazwisko: {name}</h3>
            <p>Klasa: {atendedclass}</p>
            <p>Specjalizacja: {specialization}</p>
<<<<<<< HEAD
=======
            <p>Wiek: {age}</p>
>>>>>>> ef209ab (React_05_Biblioteka)
        
    </>
    );


}

export default Student