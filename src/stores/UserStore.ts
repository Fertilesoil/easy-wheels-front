import { create } from "zustand"
import { Lessor } from '../models/Lessor';
import { Lessee } from "@/models/Lessee";

type User = Lessor | Lessee;

type UserState = {
  userStatus: { email: string, isLogged: boolean, userType: string };
  userInfo: User | null;
  lessors: Partial<Lessor>[];
  setLessors: (lessor: Partial<Lessor>[] | undefined) => void;
  setUserInfo: (userInfo: User) => void;
  setUserStatus: (email: string, isLogged: boolean, userType: string) => void;
  login: (email: string, userType: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  userStatus: { email: '', isLogged: false, userType: "" },
  userInfo: null,
  lessors: [],
  setLessors: (lessors) => set({ lessors }),
  setUserInfo: (userInfo) => set({ userInfo }),
  setUserStatus: (email, isLogged, userType) => set({ userStatus: { email, isLogged, userType } }),
  login: (email, userType) => set({ userStatus: { email, isLogged: true, userType } }),
  logout: () => set({ userStatus: { email: '', isLogged: false, userType: '' } })
}));