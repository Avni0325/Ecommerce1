import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGI3YzhmOWI3ZGM0N2ZhMzJhN2U0NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTMyOTAxMCwiZXhwIjoxNjc1NTg4MjEwfQ.aPBE97-IAd9up_nPiOvu-XzslNkluaHiLdCxSy7bUcs";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});