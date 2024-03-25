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

export const fetchUserDependentData = async (resource, userId) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/api/v1/${resource}`,
      {
        headers: {
          "user-id": userId,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${resource}:`, error);
    throw error;
  }
};

export const postUserDependentData = async (resource, data, userId) => {
  try {
    const response = await axios.post(
      `http://localhost:3001/api/v1/${resource}`,
      data,
      {
        headers: {
          "user-id": userId,
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error(`Error posting data to ${resource}:`, error);
    throw error;
  }
};
