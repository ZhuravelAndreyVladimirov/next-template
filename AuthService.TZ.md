# Техническое задание: AuthService (Авторизация и регистрация)

## 1. Описание

Сервис отвечает за авторизацию, регистрацию и выход пользователя через REST API. Все операции должны быть безопасны, валидированы и возвращать строго типизированные ответы.

## 2. Эндпоинты

### POST /auth/login

- **Описание:** Авторизация пользователя по email и паролю
- **Request body:**
  ```json
  {
    "email": "string (обязательный)",
    "password": "string (обязательный)"
  }
  ```
- **Response 200:**
  ```json
  {
    "user": {
      "id": number,
      "email": string,
      "login": string,
      "created_at": string,
      "updated_at": string
    }
  }
  ```
- **Response 4xx/5xx:**
  - Ошибка авторизации (неверный email/пароль) — 401 Unauthorized
  - Ошибка валидации — 400 Bad Request
  - Прочие ошибки — 500 Internal Server Error
- **Cookie:**
  - В случае успешной авторизации сервер ОБЯЗАН установить cookie: `token=JWT`

### POST /auth/register

- **Описание:** Регистрация нового пользователя
- **Request body:**
  ```json
  {
    "email": "string (обязательный)",
    "login": "string (обязательный)",
    "password": "string (обязательный)"
  }
  ```
- **Response 200:**
  ```json
  {
    "user": {
      "id": number,
      "email": string,
      "login": string,
      "created_at": string,
      "updated_at": string
    }
  }
  ```
- **Response 4xx/5xx:**
  - Ошибка регистрации (email/login уже занят) — 409 Conflict
  - Ошибка валидации — 400 Bad Request
  - Прочие ошибки — 500 Internal Server Error
- **Cookie:**
  - В случае успешной регистрации сервер ОБЯЗАН установить cookie: `token=JWT`

### POST /auth/logout

- **Описание:** Выход пользователя (logout)
- **Request:**
  - Без тела (или пустой объект)
  - Cookie: `token=JWT` (если был установлен)
- **Response 200:**
  ```json
  {
    "success": true
  }
  ```
- **Response 4xx/5xx:**
  - Неавторизован — 401 Unauthorized
  - Прочие ошибки — 500 Internal Server Error
- **Cookie:**
  - Сервер ОБЯЗАН удалить cookie: `token=JWT` (или сделать его невалидным, например, установить истёкший срок)

## 3. Требования к реализации

- Все поля обязательны, типы должны строго соответствовать описанию
- Пароль хранить только в захешированном виде (bcrypt, argon2 и т.д.)
- В ответе всегда возвращать объект user (или ошибку), для logout — success
- В случае ошибки возвращать корректный HTTP статус и сообщение
- Валидация email (RFC, уникальность), login (уникальность, длина), password (минимум 6 символов)
- JWT или session-cookie для дальнейшей аутентификации (по согласованию)
- При logout сервер ОБЯЗАН удалить cookie: token=JWT (или сделать его невалидным)

## 4. Примеры ошибок

- 401: { "error": "Invalid credentials" }
- 409: { "error": "Email already exists" }
- 400: { "error": "Validation error: ..." }
- 500: { "error": "Internal server error" }

## 5. Примечания

- Все ответы должны быть в формате JSON
- Все ошибки должны быть структурированы
- Не возвращать пароль пользователя ни в каком виде
