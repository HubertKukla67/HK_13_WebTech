import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Student from "./Student"
import InfoBox from './infobox'
import Header from "./Header"
import Navigation from "./Navigation"
import Technology from './components/technology'
import Footer from './components/Footer'

  const app = {
    name: "Zadanie samodzielne 1",
    version: "1.0",
    author: "Hubert Kukla",
    technologiesCount: 3
  };

  const technology = {
  name: "React",
  category: "Frontend",
  hours: 30,
  active: true
};

const student = {
  name: "Hubert",
  surname: "Kukla",
  className: "4P",
  specialization: "technik programista"
};

const course = {
  name: "Teoria React",
  teacher: "Rafał Taraszka",
  hours: 6,
  completed: false
};





function App() {



  return (
    <div>
      <Header/>

      <CourseCard></CourseCard>
      <Technology></Technology>
      <Technology></Technology>
      <Technology></Technology>

      <Navigation/>

      <h1>{app.name}</h1>

      <p>Wersja: {app.version}</p>

      <p>Autor: {app.author}</p>

      <p>
        Liczba technologii: {app.technologiesCount}
      </p>

      <p>
        {technology.name}
      </p>
      <p>
        Kategoria: {technology.category}
      </p>
      <p>
        Liczba godzin: {technology.hours}
      </p>

      <p>Uczeń: {student.name}</p>
      <p>Klasa: {student.className}</p>
      <p>Kierunek: {student.specialization}</p>



      <section className = "courseData">
        <h2>Przedmiot: {course.name}</h2>
        <p>Nauczyciel: {course.teacher}</p>
        <p>Liczba godzin: {course.hours}</p>
        <p>Ukończony: {String(course.completed)}</p>
      </section>



     <Student></Student>

      <InfoBox></InfoBox>

      <Footer></Footer>
    </div>
  );
}

export default App;