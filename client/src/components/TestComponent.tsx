import React, { useEffect, useState } from "react";
import axios from "axios";

const TestComponent: React.FC = () => {
  // Add notification when frontend connects to server
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const connectedToServer = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/status`,
        );
        if (response.status === 200) {
          setIsConnected(true);
          clearInterval(intervalId);
        }
      } catch (error) {
        console.error("Error connecting to server:", error);
      }
    };
    // Try to connect to server every 5 seconds (Render take ~23s to cold start)
    const intervalId = setInterval(connectedToServer, 5000);

    // cleanup function to clear the interval upon successful connection
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-center text-9xl font-extrabold text-teal-400">
        hello
        {isConnected && (
          <span className="ml-2 inline-block h-4 w-4 rounded-full bg-rose-200"></span>
        )}
      </p>
    </div>
  );
};

export default TestComponent;
