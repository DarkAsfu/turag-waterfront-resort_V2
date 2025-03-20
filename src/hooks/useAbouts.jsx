import { useEffect, useState } from "react";

const useAbouts = () => {
  const [abouts, setAbouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAbouts = async () => {
      try {
        const response = await fetch(
          "https://api.turagwaterfrontresort.com/api/Venueinfo/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAbouts(data);
      } catch (error) {
        // Fallback to a more general error message if `error.detail` is not available
        setError(error?.detail || error.message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchAbouts();
  }, []);

  return { abouts, loading, error };
};

export default useAbouts;
