import React from "react";

const Timeline = () => {
  const events = [
    { year: "3300 BCE", event: "Indus Valley Civilization begins" },
    { year: "1500 BCE", event: "Vedic Period starts" },
    { year: "321 BCE", event: "Maurya Empire founded by Chandragupta Maurya" },
    { year: "1526 CE", event: "Mughal Empire established by Babur" },
    { year: "1857 CE", event: "Indian Rebellion (First War of Independence)" },
    { year: "1947 CE", event: "India gains independence from British rule" },
    { year: "1950 CE", event: "India becomes a Republic" },
  ];

  return (
    <div className="flex flex-col items-center py-10 px-4 md:px-10 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        Indian History Timeline
      </h2>
      <div className="relative w-full max-w-4xl">
        <div className="absolute left-1/2 transform -translate-x-1 bg-indigo-500 w-1 h-full hidden md:block"></div>
        <div className="flex flex-col space-y-8">
          {events.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center md:items-start md:justify-${
                index % 2 === 0 ? "start" : "end"
              }`}
            >
              <div className="w-6 h-6 bg-indigo-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
              <div className="bg-white p-4 shadow-lg rounded-lg w-full md:w-5/12 border border-gray-200 text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-800">{item.year}</h3>
                <p className="text-gray-600">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
