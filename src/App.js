import { useEffect, useState } from 'react';
import './App.css';
import Article from './Article';
import data from "./data";
const getStorageTheme = () =>{
  let theme = 'light-theme';
  if(localStorage.getItem("theme")){
    theme = localStorage.getItem("theme");
  }
  return theme;
}
function App() {
  const [theme, setTheme] = useState(getStorageTheme);

  const handleToggle = () =>{
    if(theme === "light-theme"){
      setTheme("dark-theme");
    }else{
      setTheme("light-theme")
    }
  }

  useEffect (() =>{
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  },[theme])
  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>overreacted</h1>
          <button className='btn' onClick={handleToggle}>toggle</button>
        </div>
      </nav>
      <section className='articles'>
        {data.map((item) => {
         return <Article key={item.id} {...item } />
        })}
      </section>
    </main>
  );
}

export default App;
