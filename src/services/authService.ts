
import axios from "axios";
import axiosInstance from "../core/interceptors/axiosInterceptor";
import { AuthLoginRequest } from "../models/requests/auth/AuthLoginRequest";
import { UserAddRequest } from "../models/requests/auth/UserAddRequest";


class AuthService {
	async login(model : AuthLoginRequest) {
        try {
            const response = await axios.post("http://localhost:5155/api/Auth/Login", model);

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
    register(model: UserAddRequest) {
      return axios.post("http://localhost:5155/api/Auth/Register", model);
    }

   /*getCurrentUser() {
	return JSON.parse(localStorage.getItem('user'));
}*/
}

export default new AuthService();