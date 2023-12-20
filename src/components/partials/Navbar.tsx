import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Sidebar from "./Sidebar";

function Navbar(props: { contact: string }) {

  const slideSidebar = () => {
    let sidebar = document.getElementById("sidebar")
    let shade = document.getElementById("shade")
    if (sidebar && shade) {
      sidebar.classList.toggle("-translate-x-full")
      shade.classList.toggle("hidden")
      shade.classList.toggle("opacity-0")
    }
  }

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 pt-3">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={ logo } className="h-8" alt="SpeakSpectra logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              SpeakSpectra
            </span>
          </Link>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/register"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Register/Login
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  { props.contact }
                </Link>
              </li>
            </ul>
          </div>

          <form className="py-8 md:py-0 px-8 md:px-0">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input className="block cursor-pointer outline-none w-full px-4 py-2 ps-10 text-sm font-bold text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
            </div>
          </form>

          <div onClick={ slideSidebar } className="cursor-pointer w-fit bg-transparent border border-gray-600 hover:bg-gray-800 p-2 h-fit rounded-lg ">
            <div className="w-4 h-[2px] bg-gray-400 mb-1 rounded-md"></div>
            <div className="w-4 h-[2px] bg-gray-400 mb-1 rounded-md"></div>
            <div className="w-4 h-[2px] bg-gray-400 rounded-md"></div>
          </div>
        </div>
      </nav>
      <div id="shade" onClick={ slideSidebar } className="w-screen z-30 h-screen fixed top-0 bg-[#00000033] hidden ease-in-out opacity-0 transition-all"></div>
      <Sidebar />
    </>
  );
}

export default Navbar;
