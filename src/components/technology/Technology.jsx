import { v4 as uuidv4 } from 'uuid';
import TechnologyObjects from './technologyObjects';

const Technology = () => {
  return (
    <section className="py-5" id="tech">
      <div className="w-16 h-2 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 mt-5 mb-8"></div>
      <h2 className="project md:text-4xl lg:text-4xl xl:text-4xl">Technologies</h2>
      <p className="text-lg md:text-xl pb-14 text-gray-400 max-w-4xl xxxs:ml-2 xxs:ml-2 xs:ml-2 dark:text-gray-600">
        I have a wide range of skills in the field of web and mobile apps
        development. I have experience in building websites and mobile apps
        using HTML, CSS, JavaScript, React, React Native, Node.js, Express,
        MongoDB, MySQL, and more.
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-x-8 gap-y-10">
        {TechnologyObjects.map((techno) => (
        <div key={techno.id} className="h-full shadow-xl rounded-lg bg-slate-800 p-4 flex flex-row items-center dark:bg-gray-800">
          <div className="flex flex-col justify-start gap-4">
            <div className="flex flex-row items-center justify-start gap-4">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox={techno.viewBox}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={techno.d}></path>
                </svg>
              </span>
              <h2 className="text-white font-bold text-lg">{techno.type}</h2>
            </div>
            <ul className="flex flex-col justify-start px-2 gap-y-2">
              {techno.tech.map((t) => (
              <li key={uuidv4()} className="flex flex-row gap-x-4">
                <span className="dark:text-white">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 199.652c0 23.625-20.65 43.826-44.8 43.826h-99.851c16.34 17.048 18.346 49.766-6.299 70.944 14.288 22.829 2.147 53.017-16.45 62.315C353.574 425.878 322.654 448 272 448c-2.746 0-13.276-.203-16-.195-61.971.168-76.894-31.065-123.731-38.315C120.596 407.683 112 397.599 112 385.786V214.261l.002-.001c.011-18.366 10.607-35.889 28.464-43.845 28.886-12.994 95.413-49.038 107.534-77.323 7.797-18.194 21.384-29.084 40-29.092 34.222-.014 57.752 35.098 44.119 66.908-3.583 8.359-8.312 16.67-14.153 24.918H467.2c23.45 0 44.8 20.543 44.8 43.826zM96 200v192c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V200c0-13.255 10.745-24 24-24h48c13.255 0 24 10.745 24 24zM68 368c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"></path>
                  </svg>
                </span>
                <span className="text-gray-400 text-lg dark:text-slate-300">
                  {t}
                </span>
              </li>
              ))}
            </ul>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
