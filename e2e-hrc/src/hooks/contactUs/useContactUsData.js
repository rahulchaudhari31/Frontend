import { useState, useEffect } from 'react';
import { getPublicHeadOffice } from '../../services/contactUs/headOfficeApi';
import { getPublicContactCard } from '../../services/contactUs/contactCardApi';

/**
 * Custom hook to fetch and manage dynamic Head Office and Contact Card data
 * 
 * @returns {Object} Object containing:
 *   - headOffice: Head Office data or null
 *   - contactCard: Contact Card data or null
 *   - loading: boolean indicating if data is being fetched
 *   - error: error object or null if fetch was successful
 * 
 * Usage:
 * const { headOffice, contactCard, loading, error } = useContactUsData();
 */
export const useContactUsData = () => {
  const [headOffice, setHeadOffice] = useState(null);
  const [contactCard, setContactCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch both APIs in parallel
        const [headOfficeData, contactCardData] = await Promise.all([
          getPublicHeadOffice().catch((err) => {
            console.warn('Failed to fetch Head Office data, will use defaults:', err.message);
            return null;
          }),
          getPublicContactCard().catch((err) => {
            console.warn('Failed to fetch Contact Card data, will use defaults:', err.message);
            return null;
          }),
        ]);

        setHeadOffice(headOfficeData);
        setContactCard(contactCardData);
      } catch (err) {
        console.error('Unexpected error fetching contact data:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    headOffice,
    contactCard,
    loading,
    error,
  };
};
