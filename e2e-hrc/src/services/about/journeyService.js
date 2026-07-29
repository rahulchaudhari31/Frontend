import apiClient from '../../config/api';

export const getJourney = async () => {
  try {
    const response = await apiClient.get('/api/journey');
    return response.data;
  } catch (error) {
    console.error('Error fetching Journey section:', error);
    throw error;
  }
};

