const About = () => {
  return (
    <section
      id="about"
      className="flex flex-row h-[25rem] mb-12 md:flex-row md:mx-px xxxs:h-auto xxxs:flex-col-reverse xxs:h-auto xxs:flex-col-reverse xs:h-auto xs:flex-col-reverse justify-between xxxs:mx-auto xxxs:pl-1 xxs:mx-auto xxs:pl-1 xs:mx-auto sm:mx-auto xs:pl-1 sm:justify-between sm:items-center"
    >
      <div className="sm:w-2/3">
        <div className="w-16 h-2 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 sm:mt-10 sm:ml-2 mb-8"></div>
        <h2 className="title-dark project md:text-4xl lg:text-4xl xl:text-4xl">
          About me
        </h2>
        <p className="text-gray-900 dark:text-gray-600 my-4 text-lg md:text-2xl lg:text-xl">
          Hello, I&apos;m here to
          <br></br>
          assist you with your next project.
        </p>
        <p className="text-lg pb-14 text-gray-400 max-w-2xl dark:text-gray-600 md:text-xl lg:text-xl">
          I&apos;m Sonick Mumba, a software developer specializing in various
          technologies. I create web applications, mobile apps, and visually
          appealing websites for businesses. I enjoy delving into difficult
          problems as well as learning new languages and technologies.
        </p>
        <div className="flex justify-start">
          <a
            href="https://drive.google.com/file/d/1EZ_zZhqI3v09vAmdJys0G8I01wMjjFio/view?usp=share_link"
            rel="noreferrer"
            target="_blank"
          >
            <button className="bg-gradient-to-r from-violet-500 to-sky-500 px-10 xxxs:text-xl xxxs:px-5 xxs:text-xl xxs:px-5 xs:text-xl sm:text-xl xs:px-5 sm:px-5 py-2 rounded-[50px] shadow-lg hover:shadow-xl hover:bg-gray-600 hover:text-white transition-all duration-200 ease hover:bg-gradient-to-l ">
              View my CV
            </button>
          </a>
        </div>
      </div>
      <div className="flex items-center">
        <img
          src="https://github.com/Sonickmumba/sonick-portifolio/assets/106140591/a4d8a384-2a00-46b8-a711-82b7216f4e8d"
          className="rounded-full w-64 h-64 xxxs:w-28 xxxs:h-28 xxs:w-28 xxs:h-28 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-44 md:h-44"
          alt=""
        />
      </div>
    </section>
  );
};

export default About;
