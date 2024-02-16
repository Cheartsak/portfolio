import { createContext, useEffect, useState } from "react";
import { AboutMe, Contact, Navbar, Project } from "./components";

export const themeContext = createContext({});

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <themeContext.Provider value={{ theme, handleTheme }}>
      <header className="px-2 sm:px-40 dark:bg-slate-700">
        <Navbar />
      </header>
      <main className="px-5 sm:px-40 dark:bg-slate-700">
        <AboutMe />
        <Project />
        <Contact />
      </main>
      <footer className="px-5 sm:px-10 dark:bg-slate-700">
        <div className="w-full pt-10 text-[#525f7f] dark:text-white">
          <p className="text-center">&copy; 2024 Coded by Cheartsak</p>
        </div>
      </footer>
    </themeContext.Provider>
  );
};
export default App;
