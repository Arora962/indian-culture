import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

// Feedback Page Component
const FeedbackPage = () => {
  const navigate = useNavigate();  // Initialize the navigate function

  const handleBackClick = () => {
    console.log("Back button clicked.");
    navigate(-1);  // Attempt to navigate back
    setTimeout(() => {
      console.log("Checking if still on /feedback", window.location.pathname);
      if (window.location.pathname === '/feedback') {
        navigate('/');
      }
    }, 100); // Delay to check if the navigate(-1) worked, fallback to home
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Feedback</h1>
      <textarea
        className="w-3/4 p-3 border border-gray-400 rounded-lg"
        rows="5"
        placeholder="Share your thoughts..."
      ></textarea>

      {/* Button Container: Align Back button to the left and Submit button to the right */}
      <div className="flex mt-6 space-x-4">
        <Button
          className="bg-yellow-500 text-black hover:bg-yellow-600 flex-1"
          onClick={handleBackClick}
        >
          Back
        </Button>
        <Button className="bg-green-500 hover:bg-green-600 flex-1">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default FeedbackPage;
