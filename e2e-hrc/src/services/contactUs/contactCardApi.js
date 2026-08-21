import apiClient from '../../config/api';

/**
 * Fetch Contact Card information from public API
 * GET /v1/contact-card
 * 
 * Expected response structure:
 * {
 *   "success": true,
 *   "data": {
 *     "_id": "...",
 *     "title": "Ready to Connect",
 *     "phone_title": "Call Us",
 *     "phone_number": "+44 121 778 2400",
 *     "email_title": "Email Us",
 *     "email_address": "info@e2ehrc.co.uk",
 *     "office_title": "Visit Office",
 *     "office_address": "Birmingham, B28 8AS",
 *     "office_map_url": "https://maps.google.com/...",
 *     "is_active": true,
 *     "createdAt": "2026-08-21T10:30:45.123Z",
 *     "updatedAt": "2026-08-21T10:30:45.123Z"
 *   }
 * }
 */
export const getPublicContactCard = async () => {
  try {
    const response = await apiClient.get('/api/v1/contact-card');

    // Handle different response structures (data.data or data)
    const data = response.data?.data || response.data;

    return data;
  } catch (error) {
    console.error('Error fetching Contact Card data:', error);
    throw error;
  }
};
