import apiClient from '../../config/api';

/**
 * Fetch Head Office information from public API
 * GET /v1/head-office
 * 
 * Expected response structure:
 * {
 *   "success": true,
 *   "data": {
 *     "_id": "...",
 *     "title": "Head Office Birmingham",
 *     "address_line": "1204B Stratford Road",
 *     "city": "Hall Green",
 *     "state": "Birmingham",
 *     "postal_code": "B28 8AS",
 *     "country": "West Midlands",
 *     "opening_hours_title": "Opening Hours",
 *     "opening_hours": "Monday – Friday: 09:00 – 18:00\nSaturday – Sunday: Closed",
 *     "global_inquiries_title": "Global Inquiries",
 *     "global_inquiries_description": "Available via virtual consultation in GMT, GST, and IST time zones.",
 *     "is_active": true,
 *     "createdAt": "2026-08-21T10:30:45.123Z",
 *     "updatedAt": "2026-08-21T10:30:45.123Z"
 *   }
 * }
 */
export const getPublicHeadOffice = async () => {
  try {
    const response = await apiClient.get('/api/v1/head-office');

    // Handle different response structures (data.data or data)
    const data = response.data?.data || response.data;

    return data;
  } catch (error) {
    console.error('Error fetching Head Office data:', error);
    throw error;
  }
};
