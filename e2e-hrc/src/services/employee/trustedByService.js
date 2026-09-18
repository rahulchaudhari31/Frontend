import apiClient from '../../config/api';

export const getTrustedBy = async () => {
  try {
    const response = await apiClient.get('/api/employee/trusted-by');
    return response.data;
  } catch (error) {
    console.error('Error fetching Trusted By data:', error);
    throw error;
  }
};

export default {
  getTrustedBy,
};
