import { get, post } from "axios";

export const fetchData = async (resource) => {
  try {
    const response = await get(`http://localhost:3001/api/v1/${resource}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${resource}:`, error);
    throw error;
  }
};

export const postData = async (resource, data) => {
  try {
    const response = await post(`/api/v1/${resource}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error posting data to ${resource}:`, error);
    throw error;
  }
};
