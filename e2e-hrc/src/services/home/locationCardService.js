import apiClient from '../../config/api';

/**
 * Fetch active location cards from the backend
 * GET /api/location-cards
 */
export const getLocationCards = async () => {
  try {
    const response = await apiClient.get('/api/location-cards');

    // Handle different response structures
    const data = response.data?.data || response.data;

    // Ensure we return an array
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching location cards:', error);
    throw error;
  }
};
