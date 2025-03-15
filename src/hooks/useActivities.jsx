import { useState, useEffect } from 'react';

const useActivities = (venue) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch(`https://api.turagwaterfrontresort.com/api/activity/?venue=${venue}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setActivities(data);
      } catch (error) {
        setError(error.detail);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, [venue]);

  return { activities, loading, error };
};

export default useActivities;
