"use client";
import Image from "next/image";
import { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import Header from "../profil1/header/index"
import Footer from "../profil1/footer/index"

export default function Home() {
  const { user, login, register, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "register">("login");
  const [error, setError] = useState("");

  const getErrorMessage = (err: unknown) => {
    if (err instanceof Error) {
      return err.message;
    }

    return "Ошибка сервера";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      if (mode === "login") {
        await login(email, password);
      } else {
        await register(email, password);
      }
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F2F2F2]">
      
      <div className="flex min-h-screen w-full flex-col items-center justify-between bg-[#F2F2F2]">
        <Header/>
        {!user && (
          <h1 className="mb-8 px-4 text-center text-3xl font-bold">
            {mode === "login" ? "Войти" : "Регистрация"}
          </h1>
        )}

        {user ? (
          <div className="h-full w-full text-center">
                        <div className="flex flex-col items-center bg-[#F2F2F2] px-4 py-10 text-black sm:px-6 sm:py-16 lg:py-20">
                            <div className="flex w-full max-w-[1139px] flex-col gap-10">  
                                <p className="text-[24px] font-semibold">Профиль</p>
                                <div className='flex flex-col gap-10'>
                                    <div className="flex flex-col items-start gap-[22px] rounded-[7px] bg-white px-[20px] py-[24px] sm:px-[30px] lg:px-[40px] lg:py-[32px]">
                                        <p className="text-[#9C9C9C] text-[16px] font-medium">Название</p>
                                        <div className="flex flex-col gap-[4px]">
                                            <p className="text-[#9C9C9C] text-[16px] font-medium">Электронная почта</p>
                                            <p className="text-[14px]">{user.email}</p>
                                        </div>
                                        <button
                                          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-[40px] rounded-[3px] text-lg"
                                          onClick={logout}
                                        >
                                          Выйти
                                        </button>
                                    </div>
                                    <div className='flex flex-col gap-[8px] rounded-[7px] bg-white px-[20px] py-[24px] sm:px-[30px] lg:px-[40px] lg:py-[32px]'>
                                        <div className='flex gap-5'>
                                            <p className='text-[15px] font-semibold'>Адреса</p>
                                            <p className='text-[15px] font-semibold text-[#9C9C9C] cursor-pointer hover:underline underline-offset-4'>+ Добавить</p>
                                        </div>
                                        <div className='flex gap-[8px] items-center h-[53px] bg-[#F2F2F2] rounded-[7px] border border-[#E2E2E2] px-[8px]'>
                                            <div>
                                                <Image src="/info.png" alt="info" priority width={15} height={15} className="cursor-pointer"></Image>
                                            </div>
                                            <p>Адрес не добавлен</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

            <Footer/>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full max-w-[520px] flex-col gap-6 px-4 pb-20 sm:px-6 sm:pb-40 lg:pb-60">
            {error && (
              <p className="text-red-500 text-center font-semibold">{error}</p>
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-lg text-lg"
            >
              {mode === "login" ? "Войти" : "Зарегистрироваться"}
            </button>

            <p
              className="text-center text-gray-500 cursor-pointer hover:underline"
              onClick={() => setMode(mode === "login" ? "register" : "login")}
            >
              {mode === "login"
                ? "Нет аккаунта? Зарегистрироваться"
                : "Уже есть аккаунт? Войти"}
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
