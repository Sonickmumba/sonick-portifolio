import portfolioObjects from "./PortfolioObjects";

const Project = () => {
  return (
    <section className="flex flex-col" id="projects">
      <div className="w-16 h-2 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 sm:mt-10 sm:ml-2 mb-8"></div>
      <h2 className="project md:text-4xl lg:text-4xl xl:text-4xl">Projects</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-x-8 gap-y-10">
        {/* card now */}
        {portfolioObjects.map((obj) => (
          <div key={obj.id} className="h-full shadow-xl rounded-lg bg-gray-800 dark:bg-gray-800 p-4 flex flex-col justify-center items-center cursor-pointer transform transition duration-700 ease-in-out hover:scale-[1.1]">
          <img src={obj.image} alt="" />
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
      </div>
    </section>
  );
};

export default Project;
