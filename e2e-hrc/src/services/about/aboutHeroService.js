import apiClient from '../../config/api';

export const getAboutHero = async () => {
  try {
    const response = await apiClient.get('/api/about/hero');
    return response.data;
  } catch (error) {
    console.error('Error fetching About Hero section:', error);
    throw error;
  }
};
