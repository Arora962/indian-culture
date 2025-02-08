import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

// Feedback Page Component
const FeedbackPage = () => {
  const navigate = useNavigate();  // Initialize the navigate function
  const [feedbackMessage, setFeedbackMessage] = useState(""); // Feedback message state
  const [error, setError] = useState(""); // Error handling state
  const [success, setSuccess] = useState(""); 

  // Define backend URL dynamically for local and production
  const backendUrl = process.env.NODE_ENV === "production"
    ? "https://your-backend-name.vercel.app"  // Replace with your actual deployed backend URL
    : "http://localhost:5001";  // Local development URL

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

  const handleSubmitClick = async () => {
    if (!feedbackMessage) {
      setError("Please provide feedback.");
      return;
    }

    try {
      // Send feedback to the backend
      const response = await fetch(`${backendUrl}/api/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: feedbackMessage }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Feedback submitted successfully!");
        setFeedbackMessage(""); // Clear textarea after successful submission

        // Automatically refresh the page after 10 seconds
        setTimeout(() => {
          navigate("/");
        }, 10000);  // Wait for 10 seconds
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Error occurred while submitting feedback.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Feedback</h1>
      {/* Display error message */}
      {error && <div className="text-red-500 mb-4">{error}</div>}
      
      {/* Display success message */}
      {success && <div className="text-green-500 mb-4">{success}</div>}
      <textarea
        className="w-3/4 p-3 border border-gray-400 rounded-lg"
        rows="5"
        placeholder="Share your thoughts..."
        value={feedbackMessage}
        onChange={(e) => setFeedbackMessage(e.target.value)}
      ></textarea>

      {/* Button Container: Align Back button to the left and Submit button to the right */}
      <div className="flex mt-6 space-x-4">
        <Button
          className="bg-yellow-500 text-black hover:bg-yellow-600 flex-1"
          onClick={handleBackClick}
        >
          Back
        </Button>
        <Button 
          className="bg-green-500 hover:bg-green-600 flex-1"
          onClick={handleSubmitClick} // Ensure Submit triggers the feedback post request
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default FeedbackPage;
