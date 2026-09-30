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

function App() {



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
  );
}

export default App;