import apiClient from '../../config/api';

export const getBridgingSection = async () => {
  try {
    const response = await apiClient.get('/api/about/bridging');
    return response.data;
  } catch (error) {
    console.error('Error fetching Bridging the Gap section:', error);
    throw error;
  }
};
