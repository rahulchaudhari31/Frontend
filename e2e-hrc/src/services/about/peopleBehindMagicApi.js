import apiClient from '../../config/api';

export const getPeopleBehindMagic = async () => {
  try {
    const response = await apiClient.get('/api/people-behind-magic');
    return response.data?.data || response.data || null;
  } catch (error) {
    console.error('Error fetching People Behind Magic section:', error);
    throw error;
  }
};

export default getPeopleBehindMagic;
