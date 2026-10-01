<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from "./components/Header"
import Technology from './components/technology'
import Footer from './components/Footer'
import CourseCard from './components/CourseCard'
import StudentCard from './components/StudentCard'
=======
>>>>>>> temp-changes
import Header from "./components/Header";
import Technology from "./components/Technology";
import Footer from "./components/Footer";
import Student from "./components/Student";
import Samochody from "./components/samochody";
import Book from "./components/Book";


<<<<<<< HEAD
=======
>>>>>>> ef209ab (React_05_Biblioteka)
>>>>>>> temp-changes

function App() {



<<<<<<< HEAD
=======
<<<<<<< HEAD
  return (
    <div>
      <Header/>


      <main>

        <Technology
          name="React"
          category="Frontend"
          hours={30}
        />

        <Technology
          name="Node.js"
          category="Backend"
          hours={40}
        />

        <Technology
          name="MySQL"
          category="Baza danych"
          hours={20}
        />

      </main>
      
      <StudentCard
        name="Jan Kowalski"
        className="4P"
        specialization="technik programista"
        age={20}
        active={false}
      />

      <StudentCard
        name="Anna Nowak"
        className="3I"
        specialization="technik informatyk"
        age={22}
        active={true}
      />

      <StudentCard
        name="Piotr Wiśniewski"
        className="2E"
        specialization="technik elektronik"
        age={19}
        active={true}
      />

      <StudentCard
        name="Julia Wójcik"
        className="1R"
        specialization="technik reklamy"
        age={21}
        active={false}
      />


      <Footer></Footer>
    </div>
=======
>>>>>>> temp-changes


  const technologies = [
    {
      id: 1,
      name: "React",
      category: "Frontend",
      hours: 30
    },
    {
      id: 2,
      name: "Node.js",
      category: "Backend",
      hours: 40
    },
    {
      id: 3,
      name: "MySQL",
      category: "Baza danych",
      hours: 20
    },
    {
      id: 4,
      name: "Express",
      category: "Backend",
      hours: 25
<<<<<<< HEAD
    },
    {
    id: 4,
    name: "Express",
    category: "Backend",
    hours: 25
    },
    {
    id: 5,
    name: "MongoDB",
    category: "Baza danych",
    hours: 20
    }

=======
    }
>>>>>>> temp-changes
  ];

  const students = [
  { id: 1, name: "Anna", className: "4P", age: 67, specialization: "Programista"},
  { id: 2, name: "Jan", className: "4P",age: 11, specialization: "Mechanik" },
  { id: 3, name: "Adam", className: "4P", age: 8, specialization: "Analityk" }
  ];

  const samochody = [
    {
      id: 1,
      name: "BMW"
    },
    {
      id: 2,
      name: "Mazda"
    },
    {
      id: 3,
      name: "Fiat"
    },
    {
      id: 4,
      name: "Mercedes"
    },
    {
      id: 5,
      name: "Ferrari"
    }

  ]

  const books = [
  { id: 1, title: "Wiedźmin", author: "Andrzej Sapkowski" },
  { id: 2, title: "Hobbit", author: "J.R.R. Tolkien" },
  { id: 3, title: "Lalka", author: "Bolesław Prus" }
  ];

  return (
    <>
      <Header />

      <main>
        {technologies.map((technology) => (
          <Technology
            key={technology.id}
            name={technology.name}
            category={technology.category}
            hours={technology.hours}
          />
        ))}
        
        {students.map((students) =>(
          <Student
            key={students.id}
            name={students.name}
            atendedclass={students.className}
            specialization={students.specialization}
            age={students.age}
          />
        ))}

        {students.map((students) => {
          return (
          <Student
            key={students.id}
            name={students.name}
            atendedclass={students.className}
            specialization={students.specialization}
            age={students.age}
          />
        );
        })}
        {samochody.map((samochody =>
        
          <Samochody
            key={samochody.id}
            name={samochody.name}
          />
        
        ))}

        {books.map((books) =>(
          <Book
            key={books.id}
            title={books.title}
            author={books.author}
          />
        ))}

        {books.map((books) => {
          return (
          <Book
            key={books.id}
            title={books.title}
            author={books.author}
          />
        );
        })}


      
      </main>

        
        
      
      

        




      <Footer />
    </>
<<<<<<< HEAD
=======
>>>>>>> ef209ab (React_05_Biblioteka)
>>>>>>> temp-changes
  );
}

export default App;