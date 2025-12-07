import { API } from '@/api';
import { User } from '@/store/user';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  login: string;
  password: string;
}

export class AuthError extends Error {
  constructor(
    message: string,
    public code?: string,
    public status?: number,
  ) {
    super(message);
    this.name = 'AuthError';

    this.code = code;
    this.status = status;
  }
}
export class Auth {
  /**
   * Авторизация пользователя
   */
  static async login(payload: LoginPayload) {
    try {
      const response = await API.post<{ user: User }>('/auth/login', payload);
      return response.data;
    } catch (error: any) {
      throw this.handleAuthError(error, 'Ошибка авторизации');
    }
  }

  /**
   * Выход пользователя (logout)
   */
  static async logout(): Promise<void> {
    try {
      await API.post('/auth/logout');
    } catch (error: any) {
      // Для logout обычно не показываем ошибки пользователю
      console.warn('Logout error:', error);
      // Но можно пробросить для логирования
      throw this.handleAuthError(error, 'Ошибка выхода');
    }
  }

  /**
   * Регистрация пользователя
   */
  static async register(payload: RegisterPayload) {
    try {
      const response = await API.post<{ user: User }>('/auth/register', payload);
      return response.data;
    } catch (error: any) {
      throw this.handleAuthError(error, 'Ошибка регистрации');
    }
  }

  private static handleAuthError(error: any, defaultMessage: string): AuthError {
    // Обработка HTTP ошибок
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 400:
          return new AuthError(
            data.message || 'Неверные данные',
            data.code || 'VALIDATION_ERROR',
            status,
          );
        case 401:
          return new AuthError('Неверный email или пароль', 'INVALID_CREDENTIALS', status);
        case 409:
          return new AuthError('Пользователь с таким email уже существует', 'USER_EXISTS', status);
        case 429:
          return new AuthError('Слишком много попыток. Попробуйте позже', 'RATE_LIMIT', status);
        case 500:
          return new AuthError('Внутренняя ошибка сервера', 'SERVER_ERROR', status);
        default:
          return new AuthError(
            data.message || defaultMessage,
            data.code || 'UNKNOWN_ERROR',
            status,
          );
      }
    }

    // Обработка сетевых ошибок
    if (error.request) {
      return new AuthError('Нет соединения с сервером', 'NETWORK_ERROR');
    }

    // Другие ошибки
    return new AuthError(error.message || defaultMessage, 'UNKNOWN_ERROR');
  }
}
