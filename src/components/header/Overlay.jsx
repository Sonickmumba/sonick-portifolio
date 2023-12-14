import React, { useState } from "react";

// const Overlay = () => {
//   const [overlay, setOverlay] = useState(true);

//   const handleCloseOverlay = () => {
//     // console.log('sonick');
//     setOverlay(false);
//     console.log('Overlay state after closing:', overlay);
//   }

//   return (
//     <div
//       id="menu"
//       className={`fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center ${overlay ? 'block' : "none"}`}
//     >
//       <ul className="flex w-[90%] h-[95%] flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
//         <li>
//           <a
//             href="/#home"
//             className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//           >
//             Home
//           </a>
//         </li>
//         <li>
//           <a
//             href="/#about"
//             className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//           >
//             About
//           </a>
//         </li>
//         <li>
//           <a
//             href="/#projects"
//             className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//           >
//             Projects
//           </a>
//         </li>
//         <li>
//           <a
//             href="/#tech"
//             className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//           >
//             Technologies
//           </a>
//         </li>
//         <li>
//           <a
//             href="/#contact"
//             className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//           >
//             Contact
//           </a>
//         </li>
//         <span
//           className="fixed top-6 right-6 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//           onClick={handleCloseOverlay}
//         >
//           X
//         </span>
//       </ul>
      
//     </div>
//   );
// };




// import React, { useState } from "react";

const Overlay = () => {
  const [overlay, setOverlay] = useState(true);

  const handleCloseOverlay = () => {
    setOverlay(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: overlay ? "block" : "none",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          height: "95%",
          display: "flex",
          flexDirection: "column",
          marginTop: "4%",
          borderRadius: "8px",
          backgroundColor: "white",
        }}
      >
        <ul style={{ flex: 1 }}>
        <li>
          <a
            href="/#home"
            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/#about"
            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/#projects"
            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="/#tech"
            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Technologies
          </a>
        </li>
        <li>
          <a
            href="/#contact"
            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Contact
          </a>
        </li>
        </ul>
        <span
          style={{
            position: "fixed",
            top: "1rem",
            right: "1rem",
            cursor: "pointer",
            padding: "0.5rem",
            borderRadius: "50%",
            backgroundColor: "white",
          }}
          onClick={handleCloseOverlay}
        >
          X
        </span>
      </div>
    </div>
  );
};

// export default Overlay;


export default Overlay;
