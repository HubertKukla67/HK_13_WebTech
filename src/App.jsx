import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from "./components/Header"
import Technology from './components/technology'
import Footer from './components/Footer'
import CourseCard from './components/CourseCard'
function App() {



  return (
    <div>
      <Header/>

      <CourseCard></CourseCard>
      <Technology></Technology>
      <Technology></Technology>
      <Technology></Technology>
      <Footer></Footer>
    </div>
  );
}

export default App;