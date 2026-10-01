export default function StudentCard({name, className, specialization, age, active}) {



    return(
        <>
            <h3>Imię: {name}</h3>
            <h4>Klasa: {className}</h4>
            <h4>Specjalizacja: {specialization}</h4>
            <h5>Wiek: {age}</h5>
            <h5>Aktywny: {String(active)}</h5>
        </>
    );

}