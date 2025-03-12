import { useState, useEffect } from 'react';

const useActivitiesDetails = (param) => {
  const [activitiesDetails, setActivitiesDetails] = useState(null); // activities details will be null initially
  const [isLoading, setIsLoading] = useState(true); // Set loading state initially to true
  const [fetchError, setFetchError] = useState(null); // Error state to track any issues during fetch

  useEffect(() => {
    // If no valid param is passed (e.g., an empty string), skip the fetching
    if (!param) {
      setIsLoading(false); // No need to load if there's no param
      return;
    }

    // Reset previous activitiesDetails and loading state before fetching new data
    setActivitiesDetails(null);
    setIsLoading(true);

    const fetchActivitiesDetails = async () => {
      try {
        const url = `https://api.turagwaterfrontresort.com/api/activity/${param}/`; // Fetch URL with dynamic param
        console.log(`Fetching activities details from: ${url}`);
        
        const response = await fetch(url);

        // Check if the response is ok (status 200-299)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parse the JSON data if the response is valid
        const data = await response.json();
        setActivitiesDetails(data); // Store the fetched activities details
      } catch (error) {
        setFetchError(error.message); // Store any error encountered during fetch
      } finally {
        setIsLoading(false); // Set loading to false after fetch attempt
      }
    };

    fetchActivitiesDetails(); // Call the function to fetch activities details
  }, [param]); // This hook runs whenever 'param' changes

  return { activitiesDetails, isLoading, fetchError };
};

export default useActivitiesDetails;
