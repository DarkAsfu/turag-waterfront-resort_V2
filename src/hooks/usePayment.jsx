import { useState, useEffect } from 'react';

const usePayment = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch('https://api.turagwaterfrontresort.com/api/payment-methods/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPayments(data);
      } catch (error) {
        setError(error.detail);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  return { payments, loading, error };
};

export default usePayment;
