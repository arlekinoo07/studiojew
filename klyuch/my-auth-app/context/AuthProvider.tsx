"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type User = { email: string } | null;

type StoredUser = {
  email: string;
  password: string;
};

type AuthContextType = {
  user: User;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AUTH_USERS_KEY = "studiojew_users";
const AUTH_SESSION_KEY = "studiojew_session";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const readUsers = (): StoredUser[] => {
  if (typeof window === "undefined") {
    return [];
  }

  const rawUsers = window.localStorage.getItem(AUTH_USERS_KEY);

  if (!rawUsers) {
    return [];
  }

  try {
    const parsedUsers = JSON.parse(rawUsers) as StoredUser[];
    return Array.isArray(parsedUsers) ? parsedUsers : [];
  } catch {
    return [];
  }
};

const writeUsers = (users: StoredUser[]) => {
  window.localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
};

const writeSession = (email: string | null) => {
  if (email) {
    window.localStorage.setItem(AUTH_SESSION_KEY, email);
    return;
  }

  window.localStorage.removeItem(AUTH_SESSION_KEY);
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const savedEmail = window.localStorage.getItem(AUTH_SESSION_KEY);
    return savedEmail ? { email: savedEmail } : null;
  });

  const login = async (email: string, password: string) => {
    const normalizedEmail = email.trim().toLowerCase();
    const users = readUsers();
    const existingUser = users.find((item) => item.email === normalizedEmail);

    if (!existingUser || existingUser.password !== password) {
      throw new Error("Неверные данные");
    }

    writeSession(normalizedEmail);
    setUser({ email: normalizedEmail });
  };

  const register = async (email: string, password: string) => {
    const normalizedEmail = email.trim().toLowerCase();
    const users = readUsers();
    const existingUser = users.find((item) => item.email === normalizedEmail);

    if (existingUser) {
      throw new Error("Пользователь уже существует");
    }

    const nextUsers = [...users, { email: normalizedEmail, password }];
    writeUsers(nextUsers);
    writeSession(normalizedEmail);
    setUser({ email: normalizedEmail });
  };

  const logout = () => {
    writeSession(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth должен использоваться внутри AuthProvider");
  }

  return context;
};
