// import React, { useState, useEffect } from "react";

// function State() {
//   // State for the counters
//   const [projects, setProjects] = useState(0);
//   const [clients, setClients] = useState(0);
 
//   // Function to handle the counting effect
//   useEffect(() => {
//     const duration = 2000; // Duration in milliseconds
//     const incrementProjects = Math.ceil(80 / (duration / 60));
//     const incrementClients = Math.ceil(80 / (duration / 60));
   
//     const interval = setInterval(() => {
//       setProjects((prev) => {
//         if (prev < 80) return prev + incrementProjects;
//         clearInterval(interval);
//         return 80;
//       });
//       setClients((prev) => {
//         if (prev < 80) return prev + incrementClients;
//         clearInterval(interval);
//         return 80;
//       });
   

     
//     }, 100);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-black py-3 flex justify-center text-white">
//   <div className="flex space-x-24">
//     {/* Number of Projects */}
//     <div className="space-y-2">
//       <h2 className="text-4xl md:text-7xl font-bold text-[#91BE7F]">
//         {projects}+
//       </h2>
//       <p className="text-lg md:text-xl font-medium">Number of Projects</p>
//     </div>

//     {/* Happy Clients */}
//     <div className="space-y-2">
//       <h2 className="text-4xl md:text-7xl font-bold text-[#91BE7F]">
//         {clients}+
//       </h2>
//       <p className="text-lg md:text-xl font-medium">Happy Clients</p>
//     </div>
//   </div>
// </div>

//   );
// }

// export default State;


import React, { useState, useEffect } from "react";

function State() {
  // State for the counters
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  // Function to handle the counting effect
  useEffect(() => {
    const duration = 2000; // Duration in milliseconds
    const incrementProjects = Math.ceil(80 / (duration / 60));
    const incrementClients = Math.ceil(80 / (duration / 60));

    const interval = setInterval(() => {
      setProjects((prev) => {
        if (prev < 80) return prev + incrementProjects;
        clearInterval(interval);
        return 80;
      });
      setClients((prev) => {
        if (prev < 80) return prev + incrementClients;
        clearInterval(interval);
        return 80;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black py-6 flex flex-col md:flex-row justify-center items-center text-white">
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-24">
        {/* Number of Projects */}
        <div className="text-center space-y-2">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#91BE7F]">
            {projects}+
          </h2>
          <p className="text-lg sm:text-xl font-medium">Number of Projects</p>
        </div>

        {/* Happy Clients */}
        <div className="text-center space-y-2">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#91BE7F]">
            {clients}+
          </h2>
          <p className="text-lg sm:text-xl font-medium">Happy Clients</p>
        </div>
      </div>
    </div>
  );
}

export default State;

