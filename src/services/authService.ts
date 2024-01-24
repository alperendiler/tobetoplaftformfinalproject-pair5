
import axios from "axios";
import axiosInstance from "../core/interceptors/axiosInterceptor";
import { AuthLoginRequest } from "../models/requests/auth/AuthLoginRequest";
import {AddUserRequest } from "../models/requests/user/addUserRequest";


class AuthService {
	async login(model : AuthLoginRequest) {
        try {
            const response = await axiosInstance.post("Auth/Login", model);

            if (response.data  && response.data.result.token) {
              localStorage.setItem('user', JSON.stringify(response.data));
          
              return response.data.result.token;
            } else {
              throw new Error("Token not found in the response data");
            }
          } catch (error) {

            throw new Error("Authentication error"); // Bu kısmı düzeltmek gerekebilir, duruma göre değişebilir.
          }
        }

    logout() {
        localStorage.removeItem('user');
    }
    register(model: AddUserRequest) {
      return axios.post("http://localhost:5155/api/Auth/Register", model);
    }

   /*getCurrentUser() {
	return JSON.parse(localStorage.getItem('user'));
}*/
}

export default new AuthService();