import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function State() {
  // State for the counters
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [employees, setEmployees] = useState(0);
  const [hours, setHours] = useState(0);

  // Intersection observer hook to track when the component is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when it comes into view
    threshold: 0.1, // 10% of the component must be in view
  });

  // Function to handle the counting effect
  useEffect(() => {
    if (!inView) return;

    const duration = 2000; // Duration in milliseconds
    const incrementProjects = Math.ceil(80 / (duration / 60));
    const incrementClients = Math.ceil(80 / (duration / 60));
    const incrementEmployees = Math.ceil(30 / (duration / 50));
    const incrementHours = Math.ceil(4500 / (duration / 100));

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

      setEmployees((prev) => {
        if (prev < 30) return prev + incrementEmployees;
        clearInterval(interval);
        return 30;
      });

      setHours((prev) => {
        if (prev < 4500) return prev + incrementHours;
        clearInterval(interval);
        return 4500;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div className="bg-black">
      <div
        ref={ref}
        className="container mx-auto grid grid-cols-2 md:grid-cols-4 text-center text-white"
      >
        {/* Number of Projects */}
        <div className="space-y-2">
          <h2 className="text-4xl md:text-7xl font-bold text-[#91BE7F]">
            {projects}+
          </h2>
          <p className="text-lg md:text-xl font-medium">Number of Projects</p>
        </div>

        {/* Happy Clients */}
        <div className="space-y-2">
          <h2 className="text-4xl md:text-7xl font-bold text-[#91BE7F]">
            {clients}+
          </h2>
          <p className="text-lg md:text-xl font-medium">Happy Clients</p>
        </div>

        {/* Employees */}
        <div className="space-y-2">
          <h2 className="text-4xl md:text-7xl font-bold text-[#91BE7F]">
            {employees}
          </h2>
          <p className="text-lg md:text-xl font-medium">Employees</p>
        </div>

        {/* Worked Hours */}
        <div className="space-y-2">
          <h2 className="text-4xl md:text-7xl font-bold text-[#91BE7F]">
            {hours}+
          </h2>
          <p className="text-lg md:text-xl font-medium">Worked Hours</p>
        </div>
      </div>
    </div>
  );
}

export default State;
