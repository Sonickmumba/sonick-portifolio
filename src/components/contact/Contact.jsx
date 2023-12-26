const Contact = () => {
  return (
    <section className="w-full" id="contact">
      <div className="flex flex-row justify-center items-center h-[40rem] dark:h-[50rem] gap-x-16 w-full dark:w-full xxxs:gap-y-10 mr-auto xxxs:flex-col xxxs:h-auto dark:xxxs:h-auto xxs:gap-y-10 xxs:flex-col xxs:h-auto xs:gap-y-10 xs:flex-col xs:h-auto">
        <div className="flex flex-col gap-4 w-[55%] xxxs:w-full xxs:w-full xs:w-full">
          <h2 className="title2-dark">Contact me</h2>
          <h3 className="text-lg text-white dark:text-gray-600 lg:text-2xl">
            Let&apos; get in touch
          </h3>
          <p className="text-lg text-gray-400 dark:text-gray-600 lg:text-xl">
            I&apos;m always open to new opportunities and collaborations. If you
            have any questions, feel free to reach out to me.
          </p>
          <ul className="mt-5 flex flex-col gap-y-3">
            <li className="flex flex-row gap-x-4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 384 512"
                className="dark:text-blue-600"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
              </svg>
              <h3 className="text-gray-400 dark:text-gray-600 text-lg">
                Lusaka, Zambia
              </h3>
            </li>
            <li className="flex flex-row gap-x-4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="dark:text-blue-600"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>
              <h3 className="text-gray-400 dark:text-gray-600 text-lg">
                kingellie.mumba@gmail.com
              </h3>
            </li>
            <li className="flex flex-row gap-x-4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="dark:text-blue-600"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
              </svg>
              <h3 className="text-gray-400 dark:text-gray-600 text-lg">(+260) 973949800</h3>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 w-[45%] xxxs:w-full xxs:w-full xs:w-full drop-shadow-2xl rounded-lg p-8 bg-gray-800">
          <form action="" className="flex flex-col gap-6 dark:py-16">
            <input type="text" placeholder="First name" name="firstName" required className="w-full dark:w-[90%] dark:mx-auto dark:drop-shadow text-xl px-4 py-3 rounded-lg shadow-lg bg-white dark:bg-white text-gray-500 outline-none dark:text-gray-500 focus:outline-none focus:shadow-outline"/>
            <input type="text" placeholder="Last name" name="lastName" required className="w-full dark:w-[90%] dark:mx-auto dark:drop-shadow text-xl px-4 py-3 rounded-lg shadow-lg bg-white dark:bg-white text-gray-500 outline-none dark:text-gray-500 focus:outline-none focus:shadow-outline" />
            <input type="text" placeholder="Email" name="email" required className="w-full dark:w-[90%] dark:mx-auto dark:drop-shadow text-xl px-4 py-3 rounded-lg shadow-lg bg-white dark:bg-white text-gray-500 dark:text-gray-500 outline-none focus:outline-none focus:shadow-outline" />
            <textarea name="subject" id="" cols="6" rows="5" placeholder="Message" className="w-full text-xl dark:w-[90%] dark:mx-auto dark:drop-shadow px-4 py-3 rounded-lg shadow-lg bg-white dark:bg-white text-gray-500 outline-none dark:text-gray-500 focus:outline-none focus:shadow-outline"></textarea>
            <div className="dark:px-7">
              <button className=" bg-gradient-to-r from-orange-300 to-violet-500 px-5 py-2 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-600 hover:text-white xxxs:text-sm xxs:text-lg xs:text-lg sm:text-lg ">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
