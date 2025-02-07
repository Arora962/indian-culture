import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const CuisinePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold mb-4">Indian Cuisine</h1>
      <p className="text-xl text-gray-600">
        Indian cuisine is diverse, with a rich variety of dishes influenced by geography, history, and culture.
        From spicy curries to savory snacks, Indian food is known for its bold flavors and aromatic spices.
      </p>
      <p className="text-lg mt-4 text-gray-600">
        Popular dishes include biryani, dosa, samosas, butter chicken, and masala chai. The use of spices such as 
        turmeric, cumin, coriander, and garam masala make the cuisine unique and delicious.
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

export default CuisinePage;
