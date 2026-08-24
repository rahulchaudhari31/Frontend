import apiClient from '../../config/api';

export const getSEOByPageKey = async (pageKey) => {
  const cleanedKey = String(pageKey || '').trim();

  if (!cleanedKey) {
    return null;
  }

  try {
    const response = await apiClient.get(`/api/v1/seo/${encodeURIComponent(cleanedKey)}`);
    return response?.data?.data || response?.data || null;
  } catch (error) {
    return null;
  }
};
