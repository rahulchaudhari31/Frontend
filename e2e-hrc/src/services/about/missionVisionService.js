import apiClient from '../../config/api';

export const getMissionVisionData = async () => {
  try {
    const response = await apiClient.get("/api/about/mission-vision");
    return response.data;
  } catch (error) {
    console.error('Error fetching Mission Vision data:', error);
    throw error;
  }
};
