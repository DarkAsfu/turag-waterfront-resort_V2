import { useState, useEffect } from 'react';

const usePlans = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch('https://api.turagwaterfrontresort.com/api/plans/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPlans(data);
      } catch (error) {
        setError(error.detail);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  return { plans, loading, error };
};

export default usePlans;
