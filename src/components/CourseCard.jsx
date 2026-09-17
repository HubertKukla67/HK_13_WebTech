function CourseCard()
{
    const course = {
        name:"Zawansowane aplikacje webowe",
        teacher:"Rafał Taraszka",
        hours: 30,
        completed : false
    }

    return(
        <section>
            <h2>Name: ${course.name}</h2>
            <p>Nauczyciel: ${course.teacher}</p>
            <p>Godziny: ${course.hours * 60}</p>
            <p>Ukończony: ${String(course.completed)}</p>
        </section>
    )

}

export default CourseCard;