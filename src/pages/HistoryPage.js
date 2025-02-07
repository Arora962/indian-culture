import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const HistoryPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold mb-4">History of India</h1>
      <p className="text-xl text-gray-600">
        India has a rich and diverse history, from the Indus Valley Civilization to the modern-day.
        Explore the various dynasties, empires, and events that shaped the nation.
      </p>
      
      {/* Add more content as needed */}
      
      <div className="mt-6">
        <Link to="/">
          <Button className="bg-blue-500 text-white hover:bg-blue-600">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HistoryPage;
