import { useState, useEffect } from 'react';

const useSocial = () => {
  const [social, setSocial] = useState(null); // Initialize as null since it's expected to be an object
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSocial = async () => {
      try {
        const response = await fetch('https://api.turagwaterfrontresort.com/api/social/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data && data.length > 0) {
          setSocial(data[0]); // Set the first object in the array
        } else {
          throw new Error('No social data available');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSocial();
  }, []);

  return { social, loading, error }; // Return the social object, loading, and error states
};

export default useSocial;
