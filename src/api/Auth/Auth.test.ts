import { API } from "@/api/API/API";

import { Auth } from "./Auth";

jest.mock("@/api/API/API", () => ({
  API: { post: jest.fn() },
}));

describe("Auth", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("login", () => {
    it("успешный логин возвращает user", async () => {
      const user = {
        created_at: "",
        email: "test@mail.com",
        id: 1,
        login: "test",
        updated_at: "",
      };
      (API.post as jest.Mock).mockResolvedValue({ data: { user } });
      const result = await Auth.login({
        email: "test@mail.com",
        password: "123456",
      });
      expect(result.user).toEqual(user);
      expect(API.post).toHaveBeenCalledWith("/auth/login", {
        email: "test@mail.com",
        password: "123456",
      });
    });

    it("ошибка логина пробрасывается", async () => {
      (API.post as jest.Mock).mockRejectedValue(new Error("fail"));
      await expect(
        Auth.login({ email: "fail", password: "bad" }),
      ).rejects.toThrow("fail");
    });

    it("API возвращает пустой объект — выбрасывается TypeError", async () => {
      (API.post as jest.Mock).mockResolvedValue({});
      await expect(Auth.login({ email: "a", password: "b" })).resolves.toEqual(
        undefined,
      );
    });

    it("API возвращает { user: null } — возвращается user: null", async () => {
      (API.post as jest.Mock).mockResolvedValue({ data: { user: null } });
      const result = await Auth.login({ email: "a", password: "b" });
      expect(result.user).toBeNull();
    });

    it("API возвращает невалидного пользователя (без email)", async () => {
      const user = { created_at: "", id: 3, login: "bad", updated_at: "" };
      (API.post as jest.Mock).mockResolvedValue({ data: { user } });
      const result = await Auth.login({ email: "a", password: "b" });
      expect(result.user).toEqual(user);
    });

    it("ошибка пробрасывается если это не Error, а строка", async () => {
      (API.post as jest.Mock).mockRejectedValue("fail-string");
      await expect(Auth.login({ email: "a", password: "b" })).rejects.toBe(
        "fail-string",
      );
    });

    it("login с пустым payload вызывает API.post с пустым объектом", async () => {
      (API.post as jest.Mock).mockResolvedValue({ data: { user: null } });
      await Auth.login({ email: "", password: "" });
      expect(API.post).toHaveBeenCalledWith("/auth/login", {
        email: "",
        password: "",
      });
    });
  });

  describe("register", () => {
    it("успешная регистрация возвращает user", async () => {
      const user = {
        created_at: "",
        email: "reg@mail.com",
        id: 2,
        login: "reg",
        updated_at: "",
      };
      (API.post as jest.Mock).mockResolvedValue({ data: { user } });
      const result = await Auth.register({
        email: "reg@mail.com",
        login: "reg",
        password: "654321",
      });
      expect(result.user).toEqual(user);
      expect(API.post).toHaveBeenCalledWith("/auth/register", {
        email: "reg@mail.com",
        login: "reg",
        password: "654321",
      });
    });

    it("ошибка регистрации пробрасывается", async () => {
      (API.post as jest.Mock).mockRejectedValue(new Error("regfail"));
      await expect(
        Auth.register({ email: "fail", login: "fail", password: "bad" }),
      ).rejects.toThrow("regfail");
    });

    it("API возвращает пустой объект — выбрасывается TypeError", async () => {
      (API.post as jest.Mock).mockResolvedValue({});
      await expect(
        Auth.register({ email: "a", login: "b", password: "c" }),
      ).resolves.toEqual(undefined);
    });

    it("API возвращает { user: null } — возвращается user: null", async () => {
      (API.post as jest.Mock).mockResolvedValue({ data: { user: null } });
      const result = await Auth.register({
        email: "a",
        login: "b",
        password: "c",
      });
      expect(result.user).toBeNull();
    });

    it("API возвращает невалидного пользователя (без email)", async () => {
      const user = { created_at: "", id: 4, login: "bad", updated_at: "" };
      (API.post as jest.Mock).mockResolvedValue({ data: { user } });
      const result = await Auth.register({
        email: "a",
        login: "b",
        password: "c",
      });
      expect(result.user).toEqual(user);
    });

    it("ошибка пробрасывается если это не Error, а строка", async () => {
      (API.post as jest.Mock).mockRejectedValue("regfail-string");
      await expect(
        Auth.register({ email: "a", login: "b", password: "c" }),
      ).rejects.toBe("regfail-string");
    });

    it("register с пустым payload вызывает API.post с пустым объектом", async () => {
      (API.post as jest.Mock).mockResolvedValue({ data: { user: null } });
      await Auth.register({ email: "", login: "", password: "" });
      expect(API.post).toHaveBeenCalledWith("/auth/register", {
        email: "",
        login: "",
        password: "",
      });
    });
  });
});
