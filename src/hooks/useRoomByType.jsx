import { useState, useEffect } from 'react';

const useRoomByType = (type, venue) => {
  const [roomList, setRoomList] = useState([]); // Initialize with empty array
  const [isLoading, setIsLoading] = useState(true); // Set loading to true initially
  const [fetchError, setFetchError] = useState(null); // Track errors

  useEffect(() => {
    // Reset roomList and loading state when type changes
    setRoomList([]); // Reset roomList to an empty array before fetching
    setIsLoading(true); // Reset loading state to true

    const fetchRoomsByType = async () => {
      try {
        const url = `https://api.turagwaterfrontresort.com/api/room/?type=${type}&venue=${venue}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setRoomList(data); // Set the fetched room data
      } catch (error) {
        setFetchError(error.detail); // Set error if fetching fails
      } finally {
        setIsLoading(false); // Set loading to false after fetch attempt
      }
    };

    fetchRoomsByType();
  }, [type, venue]); // Dependency array: the effect runs when the 'type' changes

  return { roomList, isLoading, fetchError };
};

export default useRoomByType;
