import { API } from "@/api";

import { User } from "@/store/user";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  login: string;
  password: string;
}

export class Auth {
  /**
   * Авторизация пользователя
   * @param payload { login, password }
   * @returns Ответ сервера или ошибка
   */
  static async login(payload: LoginPayload) {
    try {
      const response = await API.post<{ user: User }>("/auth/login", payload);
      return response.data;
    } catch (error) {
      // Можно добавить кастомную обработку ошибок
      throw error;
    }
  }

  /**
   * Выход пользователя (logout)
   * @returns Ответ сервера или ошибка
   */
  static async logout(): Promise<void> {
    try {
      await API.post("/auth/logout");
    } catch (error) {
      // Можно добавить кастомную обработку ошибок
      throw error;
    }
  }

  /**
   * Регистрация пользователя
   * @param payload { email, login, password }
   * @returns Ответ сервера или ошибка
   */
  static async register(payload: RegisterPayload) {
    try {
      const response = await API.post<{ user: User }>(
        "/auth/register",
        payload,
      );
      return response.data;
    } catch (error) {
      // Можно добавить кастомную обработку ошибок
      throw error;
    }
  }
}
