import { useState, useEffect } from 'react';

const useRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch('https://api.turagwaterfrontresort.com/api/room/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRooms(data);
      } catch (error) {
        setError(error.detail);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  return { rooms, loading, error };
};

export default useRooms;
