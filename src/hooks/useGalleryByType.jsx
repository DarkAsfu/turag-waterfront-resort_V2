import { useState, useEffect } from 'react';

const useGalleryByType = (type) => {
  const [galleryList, setGalleryList] = useState([]); // Initialize with empty array
  const [isLoading, setIsLoading] = useState(true); // Set loading to true initially
  const [fetchError, setFetchError] = useState(null); // Track errors

  useEffect(() => {
    // Reset galleryList and loading state when type changes
    setGalleryList([]); // Reset galleryList to an empty array before fetching
    setIsLoading(true); // Reset loading state to true

    const fetchGalleryByType = async () => {
      try {
        const url = `https://api.turagwaterfrontresort.com/api/gallery/by-type/${type}/`;
        console.log(url);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
        setGalleryList(data); // Set the fetched room data
      } catch (error) {
        console.log(error.message);
        setFetchError(error.message); // Set error if fetching fails
      } finally {
        setIsLoading(false); // Set loading to false after fetch attempt
      }
    };

    fetchGalleryByType();
  }, [type]); // Dependency array: the effect runs when the 'type' changes

  return { galleryList, isLoading, fetchError };
};

export default useGalleryByType;
