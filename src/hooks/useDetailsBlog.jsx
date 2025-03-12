import { useState, useEffect } from 'react';

const useDetailsBlog = (param) => {
  const [blogDetails, setblogDetails] = useState(null); // blog details will be null initially
  const [isLoading, setIsLoading] = useState(true); // Set loading state initially to true
  const [fetchError, setFetchError] = useState(null); // Error state to track any issues during fetch

  useEffect(() => {
    // If no valid param is passed (e.g., an empty string), skip the fetching
    if (!param) {
      setIsLoading(false); // No need to load if there's no param
      return;
    }

    // Reset previous blogDetails and loading state before fetching new data
    setblogDetails(null);
    setIsLoading(true);

    const fetchblogDetails = async () => {
      try {
        const url = `https://api.turagwaterfrontresort.com/api/blog/${param}/`; // Fetch URL with dynamic param
        console.log(`Fetching blog details from: ${url}`);
        
        const response = await fetch(url);

        // Check if the response is ok (status 200-299)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parse the JSON data if the response is valid
        const data = await response.json();
        setblogDetails(data); // Store the fetched blog details
      } catch (error) {
        setFetchError(error.message); // Store any error encountered during fetch
      } finally {
        setIsLoading(false); // Set loading to false after fetch attempt
      }
    };

    fetchblogDetails(); // Call the function to fetch blog details
  }, [param]); // This hook runs whenever 'param' changes

  return { blogDetails, isLoading, fetchError };
};

export default useDetailsBlog;
