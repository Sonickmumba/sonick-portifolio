// import React from 'react'

const Project = () => {
  return (
    <section className="flex flex-col" id="projects">
      <div className="w-16 h-2 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 sm:mt-10 sm:ml-2"></div>
      <h2 className="project">Projects</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-x-8 gap-y-10">
        {/* card now */}
        <div className="h-full shadow-xl rounded-lg bg-gray-800 dark:bg-gray-800 p-4 flex flex-col justify-center items-center cursor-pointer transform transition duration-700 ease-in-out hover:scale-[1.1]">
          <img src="https://res.cloudinary.com/ujuzi/image/upload/v1670286381/Kevent/huntify_iw4jnf.png" alt="" />
          <div className="px-2">
            <h3 className="xxxs:text-lg xxs:text-lg xs:text-xl sm:text-xl py-2 font-bold text-white">Leaderboard</h3>
            <p className="text-gray-400 xxxs:text-sm xxs:text-sm xs:text-sm sm:text-sm md:text-lg dark:text-slate-300">
            Huntify Tracks your job applications and keep your job search organized, all in one place. No more spreadsheets, no more emails,no more lost job applications.
            </p>
            <p className="xxxs:text-lg xxs:text-lg xs:text-lg sm:text-lg py-2 transition hover:duration-700 ease-in-out delay-150 dark:text-white dark:font-bold text-white">Technologies</p>
            <ul className="flex flex-row gap-x-2">
              <li className="text-gray-400 dark:text-slate-300 bg-slate-900/40 rounded-full px-1 py-1 transition hover:duration-700 ease-in-out delay-150 dark:bg-slate-900/40 xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm">MERN Stack</li>
              <li className="text-gray-400 dark:text-slate-300 bg-slate-900/40 rounded-full px-1 py-1 transition hover:duration-700 ease-in-out delay-150 dark:bg-slate-900/40 xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm">Context API</li>
              <li className="text-gray-400 dark:text-slate-300 bg-slate-900/40 rounded-full px-1 py-1 transition hover:duration-700 ease-in-out delay-150 dark:bg-slate-900/40 xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm">Styled components</li>
            </ul>
            <div className="flex justify-between text-lg py-4 xxxs:text-sm xxs:text-sm xs:text-sm sm:text-sm">
              <a href="#" className="bg-gradient-to-r from-orange-300 to-slate-500 px-4 xs:px-3 md:px-3 py-2 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-600 hover:text-white">Live demo</a>
              <a href="#" className="bg-gradient-to-r from-orange-300 to-slate-500 px-4 md:px-3 py-2 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-600 hover:text-white">Source Code</a>
            </div>
          </div>
        </div>

        {/* second card */}
        <div className="h-full shadow-xl rounded-lg bg-gray-800 dark:bg-gray-800 p-4 flex flex-col justify-center items-center cursor-pointer transform transition duration-700 ease-in-out hover:scale-[1.1]">
          <img src="https://res.cloudinary.com/ujuzi/image/upload/v1670286381/Kevent/huntify_iw4jnf.png" alt="" />
          <div className="px-2">
            <h3 className="xxxs:text-lg xxs:text-lg xs:text-xl sm:text-xl py-2 font-bold text-white">Leaderboard</h3>
            <p className="text-gray-400 xxxs:text-sm xxs:text-sm xs:text-sm sm:text-sm md:text-lg dark:text-slate-300">
            Huntify Tracks your job applications and keep your job search organized, all in one place. No more spreadsheets, no more emails,no more lost job applications.
            </p>
            <p className="xxxs:text-lg xxs:text-lg xs:text-lg sm:text-lg py-2 transition hover:duration-700 ease-in-out delay-150 dark:text-white dark:font-bold text-white">Technologies</p>
            <ul className="flex flex-row gap-x-2">
              <li className="text-gray-400 dark:text-slate-300 bg-slate-900/40 rounded-full px-1 py-1 transition hover:duration-700 ease-in-out delay-150 dark:bg-slate-900/40 xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm">MERN Stack</li>
              <li className="text-gray-400 dark:text-slate-300 bg-slate-900/40 rounded-full px-1 py-1 transition hover:duration-700 ease-in-out delay-150 dark:bg-slate-900/40 xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm">Context API</li>
              <li className="text-gray-400 dark:text-slate-300 bg-slate-900/40 rounded-full px-1 py-1 transition hover:duration-700 ease-in-out delay-150 dark:bg-slate-900/40 xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm">Styled components</li>
            </ul>
            <div className="flex justify-between text-lg py-4 xxxs:text-sm xxs:text-sm xs:text-sm sm:text-sm">
              <a href="#" className="bg-gradient-to-r from-orange-300 to-slate-500 px-4 xs:px-3 md:px-3 py-2 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-600 hover:text-white">Live demo</a>
              <a href="#" className="bg-gradient-to-r from-orange-300 to-slate-500 px-4 md:px-3 py-2 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-600 hover:text-white">Source Code</a>
            </div>
          </div>
        </div>

        {/* third card */}

        <div className="h-full shadow-xl rounded-lg bg-gray-800 dark:bg-gray-800 p-4 flex flex-col justify-center items-center cursor-pointer transform transition duration-700 ease-in-out hover:scale-[1.1]">
          <img src="https://res.cloudinary.com/ujuzi/image/upload/v1670286381/Kevent/huntify_iw4jnf.png" alt="" />
          <div className="px-2">
            <h3 className="xxxs:text-lg xxs:text-lg xs:text-xl sm:text-xl py-2 font-bold text-white">Leaderboard</h3>
            <p className="text-gray-400 xxxs:text-sm xxs:text-sm xs:text-sm sm:text-sm md:text-lg dark:text-slate-300">
            Huntify Tracks your job applications and keep your job search organized, all in one place. No more spreadsheets, no more emails,no more lost job applications.
            </p>
            <p className="xxxs:text-lg xxs:text-lg xs:text-lg sm:text-lg py-2 transition hover:duration-700 ease-in-out delay-150 dark:text-white dark:font-bold text-white">Technologies</p>
            <ul className="flex flex-row gap-x-2">
              <li className="text-gray-400 dark:text-slate-300 bg-slate-900/40 rounded-full px-1 py-1 transition hover:duration-700 ease-in-out delay-150 dark:bg-slate-900/40 xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm">MERN Stack</li>
              <li className="text-gray-400 dark:text-slate-300 bg-slate-900/40 rounded-full px-1 py-1 transition hover:duration-700 ease-in-out delay-150 dark:bg-slate-900/40 xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm">Context API</li>
              <li className="text-gray-400 dark:text-slate-300 bg-slate-900/40 rounded-full px-1 py-1 transition hover:duration-700 ease-in-out delay-150 dark:bg-slate-900/40 xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm">Styled components</li>
            </ul>
            <div className="flex justify-between text-lg py-4 xxxs:text-sm xxs:text-sm xs:text-sm sm:text-sm">
              <a href="#" className="bg-gradient-to-r from-orange-300 to-slate-500 px-4 xs:px-3 md:px-3 py-2 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-600 hover:text-white">Live demo</a>
              <a href="#" className="bg-gradient-to-r from-orange-300 to-slate-500 px-4 md:px-3 py-2 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-600 hover:text-white">Source Code</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Project;
