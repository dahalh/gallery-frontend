import axios from "axios";

const rootUrlAPI = "http://localhost:8000/api/v1";
const userEP = rootUrlAPI + "/user";

export const postUser = async (usrObj) => {
  try {
    const { data } = await axios.post(userEP, usrObj);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const loginUser = async (usrObj) => {
  try {
    const { data } = await axios.post(userEP + "/login", usrObj);
    return data;
  } catch (error) {
    let message = error.message;

    if (error.response && error.response.data) {
      message = error.response.data.message;
    }

    return {
      status: "error",
      message,
    };
  }
};

export const postEmailVerification = async (obj) => {
  try {
    const { data } = await axios.post(userEP + "/email-verification", obj);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};
