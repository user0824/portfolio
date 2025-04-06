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
        }
      } catch (error) {
        console.error("Error connecting to server:", error);
      }
    };
    connectedToServer();
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
