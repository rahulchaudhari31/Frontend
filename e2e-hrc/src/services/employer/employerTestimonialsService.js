import apiClient from "../../config/api";

export const getEmployerTestimonials = async () => {
  const response = await apiClient.get("/api/employer/testimonials");
  return response.data;
};
