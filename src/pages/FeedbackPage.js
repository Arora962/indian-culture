import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const FeedbackPage = () => {
  const navigate = useNavigate();  
  const [feedbackMessage, setFeedbackMessage] = useState(""); 
  const [error, setError] = useState(""); 
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); 

  const backendUrl = process.env.NODE_ENV === "production"
    ? "https://indian-culture-sigma.vercel.app"  
    : "http://localhost:3001";  

  const handleBackClick = () => {
    console.log("Back button clicked.");
    navigate(-1);  
    setTimeout(() => {
      console.log("Checking if still on /feedback", window.location.pathname);
      if (window.location.pathname === '/feedback') {
        navigate('/');
      }
    }, 100);
  };

  const handleSubmitClick = async () => {
    if (!feedbackMessage) {
      setError("Please provide feedback.");
      return;
    }

    setLoading(true); 

    try {
      const response = await fetch(`${backendUrl}/api/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: feedbackMessage }),
      });

      const data = await response.json();

      setLoading(false); 

      if (response.ok) {
        setSuccess("Feedback submitted successfully!");
        setFeedbackMessage(""); 

        setTimeout(() => {
          navigate("/");
        }, 10000);  
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setLoading(false);
      setError("Error occurred while submitting feedback.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold mb-4 text-center">Feedback</h1>

      {/* Display error message */}
      {error && <div className="text-red-500 mb-4 text-lg">{error}</div>}

      {/* Display success message */}
      {success && <div className="text-green-500 mb-4 text-lg">{success}</div>}

      <textarea
        className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-4 border border-gray-400 rounded-lg shadow-lg text-lg"
        rows="6"
        placeholder="Share your thoughts..."
        value={feedbackMessage}
        onChange={(e) => setFeedbackMessage(e.target.value)}
      ></textarea>

      {/* Button Container: Align Back button to the left and Submit button to the right */}
      <div className="flex mt-6 space-x-4 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <Button
          className="bg-yellow-500 text-black hover:bg-yellow-600 w-full sm:w-1/2"
          onClick={handleBackClick}
        >
          Back
        </Button>
        <Button
          className="bg-green-500 hover:bg-green-600 w-full sm:w-1/2"
          onClick={handleSubmitClick}
          disabled={loading} 
        >
          {/* Show loading spinner if loading is true */}
          {loading ? (
            <div className="animate-spin border-4 border-t-4 border-gray-600 rounded-full w-6 h-6 mx-auto"></div>
          ) : (
            "Submit"
          )}
        </Button>
      </div>
    </div>
  );
};

export default FeedbackPage;
