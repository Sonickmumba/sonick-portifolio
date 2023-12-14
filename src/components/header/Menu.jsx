import React from 'react'

const Menu = () => {
  return (
    <div className="xxxs:hidden xxs:hidden xs:hidden sm:hidden md:block lg:block xl:block row-start-1 row-end-2 col-start-5 col-end-6 xxxs:col-start-2 xxxs:col-end-6 xxs:col-start-2 xxs:col-end-6 xs:col-start-2 xs:col-end-6">
        <ul className="flex justify-around gap-x-6 md:gap-x-1">
          <li className="hover:transition-all duration-200 ease transform hover:scale-110 hover:bg-slate-600 hover:rounded-full px-3 py-1">
            <a href="/#home" rel="noopener noreferrer">
              <span className="text-xl rounded-full text-white">Home</span>
            </a>
          </li>
          <li className="hover:transition-all duration-200 ease transform hover:scale-110 hover:bg-slate-600 hover:rounded-full px-3 py-1">
            <a href="/#about" rel="noopener noreferrer">
              <span className="text-xl rounded-full text-white">About</span>
            </a>
          </li>
          <li className="hover:transition-all duration-200 ease transform hover:scale-110 hover:bg-slate-600 hover:rounded-full px-3 py-1">
            <a href="/#projects" rel="noopener noreferrer">
              <span className="text-xl rounded-full text-white">Projects</span>
            </a>
          </li>
          <li className="hover:transition-all duration-200 ease transform hover:scale-110 hover:bg-slate-600 hover:rounded-full px-3 py-1">
            <a href="/#tech" rel="noopener noreferrer">
              <span className="text-xl rounded-full text-white">Technologies</span>
            </a>
          </li>
          <li className="hover:transition-all duration-200 ease transform hover:scale-110 hover:bg-slate-600 hover:rounded-full px-3 py-1">
            <a href="/#contact" rel="noopener noreferrer">
              <span className="text-xl rounded-full text-white">Contact</span>
            </a>
          </li>
        </ul>
      </div>
  )
}

export default Menu

// xxxs:hidden xxs:hidden xs:hidden sm:hidden