import axios from "axios";

export const fetchData = async (resource) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/api/v1/${resource}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${resource}:`, error);
    throw error;
  }
};

export const postData = async (resource, data) => {
  try {
    const response = await axios.post(
      `http://localhost:3001/api/v1/${resource}`,
      data
    );
    console.log(response.data);
  } catch (error) {
    console.error(`Error posting data to ${resource}:`, error);
    throw error;
  }
};
