import apiClient from '../../config/api';

/**
 * Fetch active approach cards from the backend
 * GET /api/approach-cards
 */
export const getApproachCards = async () => {
  try {
    const response = await apiClient.get('/api/approach-cards');

    // Handle different response structures
    const data = response.data?.data || response.data;

    // Ensure we return an array
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching approach cards:', error);
    throw error;
  }
};
