"use client";

import { useAuth } from "../../context/AuthProvider";

export default function Profile() {
  const { user, login, register, logout } = useAuth();

  if (!user) {
    return (
      <div className="">
        <h1 className="text-xl font-bold mb-4">Вы не авторизованы</h1>
        <button
          onClick={() => login("user@example.com", "123456")}
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Войти
        </button>
        <button
          onClick={() => register("new@example.com", "123456")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Регистрация
        </button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Вы авторизованы как {user.email}</h1>
      <button
        onClick={logout}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Выйти
      </button>
    </div>
  );
}
