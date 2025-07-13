import { API } from "@/api/API/API";

import { UserService } from "./UserService";

jest.mock("@/api/API/API", () => ({
  API: { get: jest.fn() },
}));

describe("UserService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("успешно возвращает пользователя без токена", async () => {
    const user = {
      created_at: "",
      email: "test@mail.com",
      id: 1,
      login: "test",
      updated_at: "",
    };
    (API.get as jest.Mock).mockResolvedValue({ data: { user } });
    const result = await UserService.getMe();
    expect(result.user).toEqual(user);
    expect(API.get).toHaveBeenCalledWith("/user/me", undefined);
  });

  it("успешно возвращает пользователя с токеном", async () => {
    const user = {
      created_at: "",
      email: "tok@mail.com",
      id: 2,
      login: "tok",
      updated_at: "",
    };
    (API.get as jest.Mock).mockResolvedValue({ data: { user } });
    const result = await UserService.getMe({ token: "abc" });
    expect(result.user).toEqual(user);
    expect(API.get).toHaveBeenCalledWith("/user/me", {
      headers: { Cookie: "token=abc" },
    });
  });

  it("ошибка пробрасывается", async () => {
    (API.get as jest.Mock).mockRejectedValue(new Error("fail"));
    await expect(UserService.getMe()).rejects.toThrow("fail");
  });

  it("API возвращает пустой объект — выбрасывается TypeError", async () => {
    (API.get as jest.Mock).mockResolvedValue({});
    await expect(UserService.getMe()).rejects.toThrow();
  });

  it("API возвращает { user: null } — возвращается user: null", async () => {
    (API.get as jest.Mock).mockResolvedValue({ data: { user: null } });
    const result = await UserService.getMe();
    expect(result.user).toBeNull();
  });

  it("API возвращает невалидного пользователя (без email)", async () => {
    const user = { created_at: "", id: 3, login: "bad", updated_at: "" };
    (API.get as jest.Mock).mockResolvedValue({ data: { user } });
    const result = await UserService.getMe();
    expect(result.user).toEqual(user); // сервис не валидирует, просто возвращает
  });

  it("если options.token пустой — не добавляется заголовок Cookie", async () => {
    const user = {
      created_at: "",
      email: "empty@mail.com",
      id: 4,
      login: "empty",
      updated_at: "",
    };
    (API.get as jest.Mock).mockResolvedValue({ data: { user } });
    const result = await UserService.getMe({ token: "" });
    expect(result.user).toEqual(user);
    expect(API.get).toHaveBeenCalledWith("/user/me", undefined);
  });

  it("ошибка пробрасывается если это не Error, а строка", async () => {
    (API.get as jest.Mock).mockRejectedValue("fail-string");
    await expect(UserService.getMe()).rejects.toBe("fail-string");
  });
});
