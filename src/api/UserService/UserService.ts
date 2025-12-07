import { API } from '@/api';

import { User } from '@/store/user';

export class UserService {
  /**
   * Получить данные текущего пользователя
   * @param options SSR: { token } — пробросить cookie
   * @returns {Promise<{user: User}>} Данные пользователя
   */
  static async getMe(options?: { token?: string }): Promise<{ user: User }> {
    try {
      const config = options?.token ? { headers: { Cookie: `token=${options.token}` } } : undefined;

      const response = await API.get<{ user: User }>('/user/me', config);

      if (!response || !response.data || typeof response.data.user === 'undefined') {
        throw new TypeError('User not found in API response');
      }

      return response.data;
    } catch (error) {
      console.error('Ошибка при получении пользователя:', error);

      if (error instanceof TypeError) {
        throw error;
      }

      throw new Error(
        `Ошибка сервиса пользователя: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }
}
