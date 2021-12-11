import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllData = async () => {
  try {
    const data  = await instance.get("/");
    console.log(data)
    return data;
  } catch (err) {
    console.log(err);
  }
};
