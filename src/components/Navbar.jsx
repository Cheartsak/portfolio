import { useContext } from "react";
import { themeContext } from "../App";

const Navbar = () => {
  const { theme, handleTheme } = useContext(themeContext);

  return (
    <nav className="flex flex-row sm:justify-between justify-evenly items-center pt-4 text-[#525f7f] dark:text-white">
      <div className="font-bold text-xl sm:block hidden">
        &lt;Portfolio/&gt;
      </div>
      <div className="flex flex-row justify-evenly sm:gap-8 gap-4 items-center">
        <ul className="flex flex-row justify-evenly sm:gap-8 gap-4">
          <li>
            <a
              href="#project"
              className="hover:text-light-purple hover:underline hover:underline-offset-8 hover:decoration-light-purple hover:decoration-4"
            >
              Project
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-light-purple hover:underline hover:underline-offset-8 hover:decoration-light-purple hover:decoration-4"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="bg-[#5a5d7a] text-white rounded-lg px-2 py-1 hover:opacity-75">
          <a href="/src/assets/CV_Cheartsak.pdf" target="_blank">
            Download CV
          </a>
        </div>
        <div onClick={handleTheme}>
          {theme === "light" ? (
            <img src="/src/assets/icons/sun.svg" alt="sun icon" />
          ) : (
            <img src="/src/assets/icons/moon.svg" alt="moon icon" />
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
