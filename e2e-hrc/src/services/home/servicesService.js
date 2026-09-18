import apiClient from '../../config/api';

/**
 * Fetch active services from the backend
 * GET /api/services
 */
export const getServices = async () => {
  try {
    const response = await apiClient.get('/api/services');

    // Handle different response structures
    const data = response.data?.data || response.data;

    // Ensure we return an array
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};

/**
 * Fetch the public Sectors section content
 * GET /api/sectors
 */
export const getSectors = async () => {
  try {
    const response = await apiClient.get('/api/sectors');
    return response.data?.data || response.data || null;
  } catch (error) {
    console.error('Error fetching Sectors section:', error);
    throw error;
  }
};
