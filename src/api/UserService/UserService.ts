import { API } from "@/api";

import { User } from "@/store/user";

export class UserService {
  /**
   * Получить данные текущего пользователя
   * @param options SSR: { token } — пробросить cookie
   * @returns {Promise<{user: User}>} Данные пользователя
   */
  static async getMe(options?: { token?: string }): Promise<{ user: User }> {
    try {
      const config = options?.token
        ? { headers: { Cookie: `token=${options.token}` } }
        : undefined;
      const response = await API.get<{ user: User }>("/user/me", config);
      return response.data;
    } catch (error) {
      // Можно добавить кастомную обработку ошибок
      throw error;
    }
  }
}
