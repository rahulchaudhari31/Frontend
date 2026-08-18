import apiClient from '../../config/api';

/**
 * Fetch all active locations for the Network Map
 * GET /api/locations/active
 * 
 * Expected response structure:
 * {
 *   "success": true,
 *   "message": "Locations fetched successfully.",
 *   "data": [...]
 * }
 */
export const getActiveLocations = async () => {
  try {
    const response = await apiClient.get('/api/locations/active');
    
    // Handle the response structure: response.data contains { success, message, data }
    const payload = response?.data ?? {};
    
    // Extract the locations array from the nested data structure
    const locations = payload?.data ?? payload?.locations ?? [];
    
    return Array.isArray(locations) ? locations : [];
  } catch (error) {
    console.error('Error fetching active locations:', error.response?.data || error.message);
    throw error;
  }
};

export default getActiveLocations;
