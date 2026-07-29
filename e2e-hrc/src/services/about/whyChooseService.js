import apiClient from '../../config/api';

export const getWhyChooseData = async () => {
  try {
    const response = await apiClient.get('/api/about/why-choose');
    return response.data;
  } catch (error) {
    console.error('Error fetching Why Choose data:', error);
    throw error;
  }
};
