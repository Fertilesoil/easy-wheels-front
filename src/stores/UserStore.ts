import { create } from "zustand"


type UserState = {
  userStatus: { email: string, isLogged: boolean };
  setUserStatus: (email: string, isLogged: boolean) => void;
  login: (email: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  userStatus: { email: '', isLogged: false },
  setUserStatus: (email, isLogged) => set({ userStatus: { email, isLogged } }),
  login: (email) => set({ userStatus: { email, isLogged: true } }),
  logout: () => set({ userStatus: { email: '', isLogged: false } })
}));