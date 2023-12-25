// import React from 'react'

const portfolioObjects = [
  {
    id: 1,
    projectTitle: 'project1',
    projectTitleDesktop: 'LeaderBoard',
    tags: ['HTML', 'Webpack', 'Es6', 'API'],
    description:
      'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
    liveUrl: 'https://sonickmumba.github.io/Leaderboard/',
    sourceUrl: 'https://github.com/Sonickmumba/Leaderboard',
    image: './images/projects/plash.jpg',
  },

  {
    id: 2,
    projectTitle: 'project2',
    projectTitleDesktop: 'Meal App',
    tags: ['Html', 'CSS', 'JavaScript'],
    description:
      'Web application based on an external API. We selected an API that provides data about Meals. One is able to like and comment on a meal.',
    liveUrl: 'https://megha-n-bodke.github.io/CapstoneProject2/dist/',
    sourceUrl: 'https://github.com/Sonickmumba/CapstoneProject2',
    image: './images/projects/sa.jpg',
  },

  {
    id: 3,
    projectTitle: 'project3',
    projectTitleDesktop: 'Awesome Books app',
    tags: ['HTML', 'ES6', 'React'],
    description:
      'Awesome books is a simple website that displays a list of books and allows you to add and remove books from that list.',
    liveUrl: 'https://sonickmumba.github.io/Awesome-Books-ES6/',
    sourceUrl: 'https://github.com/Sonickmumba/Awesome-Books-ES6',
    image: './images/projects/books.jpg',
  },
  {
    id: 4,
    projectTitle: 'project4',
    projectTitleDesktop: 'Vespa Cars Rental',
    tags: ['HTML', 'Ruby on Rails', 'React'],
    description:
      'Vesper application for all lovers of cars. Let your car make money for you by listing it on our platform so others can view and rent.',
    liveUrl: 'https://vesper-4yj8.onrender.com/',
    sourceUrl: 'https://github.com/Sonickmumba/vesper-frontend',
    image: './images/projects/do.jpg',
  },

  {
    id: 5,
    projectTitle: 'project5',
    projectTitleDesktop: 'Online Math Calculator',
    tags: ['HTML', 'Es6', 'React'],
    description:
      'Single Page App for math calculations & reading random math related quotes, offering quick access to simple tools and resources',
    liveUrl: 'https://dancing-conkies-c08f95.netlify.app/',
    sourceUrl: 'https://github.com/Sonickmumba/math-magicians',
    image: './images/projects/cal.ai',
  },
  {
    id: 6,
    projectTitle: 'project6',
    projectTitleDesktop: 'ZAMSA-Seminar-Website',
    tags: ['HTML', 'Es6', 'JavaScript'],
    description:
      'Zambia Mathematics Association Conference website with info on dates, speakers, tickets, location. Impact of Mathematics in a society.',
    liveUrl: 'https://sonickmumba.github.io/Capstone-Project-1/',
    sourceUrl: 'https://github.com/Sonickmumba/Capstone-Project-1',
    image: './images/projects/conf2.png',
  },
];

const Project = () => {
  return (
    <section className="flex flex-col" id="projects">
      <div className="w-16 h-2 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 sm:mt-10 sm:ml-2"></div>
      <h2 className="project">Projects</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-x-8 gap-y-10">
        {/* card now */}
        {portfolioObjects.map((obj) => (
          <div key={obj.id} className="h-full shadow-xl rounded-lg bg-gray-800 dark:bg-gray-800 p-4 flex flex-col justify-center items-center cursor-pointer transform transition duration-700 ease-in-out hover:scale-[1.1]">
          <img src="https://res.cloudinary.com/ujuzi/image/upload/v1670286381/Kevent/huntify_iw4jnf.png" alt="" />
          <div className="px-2">
            <h3 className="xxxs:text-lg xxs:text-lg xs:text-xl sm:text-xl py-2 font-bold text-white">{obj.projectTitleDesktop}</h3>
            <p className="text-gray-400 xxxs:text-sm xxs:text-sm xs:text-sm sm:text-sm md:text-lg dark:text-slate-300">
            {obj.description}
            </p>
            <p className="xxxs:text-lg xxs:text-lg xs:text-lg sm:text-lg py-2 transition hover:duration-700 ease-in-out delay-150 dark:text-white dark:font-bold text-white">Technologies</p>
            <ul className="flex flex-row gap-x-2">
              {obj.tags.map((tag, id) => (
                <li key={id} className="text-gray-400 dark:text-slate-300 bg-slate-900/40 rounded-full px-1 py-1 transition hover:duration-700 ease-in-out delay-150 dark:bg-slate-900/40 xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm">{tag}</li>
              ))}
            </ul>
            <div className="flex justify-between text-lg py-4 xxxs:text-sm xxs:text-sm xs:text-sm sm:text-sm">
              <a href={obj.liveUrl} className="bg-gradient-to-r from-orange-300 to-slate-500 px-4 xs:px-3 md:px-3 py-2 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-600 hover:text-white">Live demo</a>
              <a href={obj.sourceUrl} className="bg-gradient-to-r from-orange-300 to-slate-500 px-4 md:px-3 py-2 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-600 hover:text-white">Source Code</a>
            </div>
          </div>
        </div>
        ))}

        {/* <div className="h-full shadow-xl rounded-lg bg-gray-800 dark:bg-gray-800 p-4 flex flex-col justify-center items-center cursor-pointer transform transition duration-700 ease-in-out hover:scale-[1.1]">
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
        </div> */}

        {/* second card */}
        {/* <div className="h-full shadow-xl rounded-lg bg-gray-800 dark:bg-gray-800 p-4 flex flex-col justify-center items-center cursor-pointer transform transition duration-700 ease-in-out hover:scale-[1.1]">
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
        </div> */}

        {/* third card */}

        {/* <div className="h-full shadow-xl rounded-lg bg-gray-800 dark:bg-gray-800 p-4 flex flex-col justify-center items-center cursor-pointer transform transition duration-700 ease-in-out hover:scale-[1.1]">
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
        </div> */}

      </div>
    </section>
  );
};

export default Project;
