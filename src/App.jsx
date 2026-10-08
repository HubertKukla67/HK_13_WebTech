
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
import Student from "./components/Student";
import Samochody from "./components/samochody";
import Book from "./components/Book";
import Product from './components/Product'
import Counter from './components/Counter'


function App() {

    function selectTechnology(name) {
    console.log("Wybrano: " + name);
    }

    function selectProduct(name, price)
    {
        console.log("Wybrano: " + name);
        console.log("Cena " +  price);
    }


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

  const products = {
    name:"laptop",

  };

  const books = [
  { id: 1, title: "Wiedźmin", author: "Andrzej Sapkowski" },
  { id: 2, title: "Hobbit", author: "J.R.R. Tolkien" },
  { id: 3, title: "Lalka", author: "Bolesław Prus" }
  ];

  function showMessage() {
    console.log("Kliknięto przycisk");
  }

 


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
              onSelect={selectTechnology}
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

        <Technology
          name="React"
          category="Frontend"
          hours={30}
          onSelect={selectTechnology}
        />

        <Product
          name={"Laptop"}
          price={30}
          onSelect={selectProduct}
        />
        <br></br>
        <button onClick={showMessage}>
          Kliknij
        </button>
          
          <Counter/>



      </main>

        
        
      
      

        




      <Footer />
    </>

  );
}

export default App;