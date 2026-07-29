import apiClient from '../../config/api';

export const getWhoWeAre = async () => {
  try {
    const response = await apiClient.get('/api/about/who-we-are');
    return response.data;
  } catch (error) {
    console.error('Error fetching Who We Are section:', error);
    throw error;
  }
};

