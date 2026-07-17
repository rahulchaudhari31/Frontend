import apiClient from '../../config/api';

/**
 * Fetch active employee/employer cards from the backend
 * GET /api/employeecard
 */
export const getEmployeeCards = async () => {
  try {
    const response = await apiClient.get('/api/employeecard');
    
    // Handle different response structures
    const data = response.data?.data || response.data;
    
    // Ensure we return an array
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching employee cards:', error);
    throw error;
  }
};
