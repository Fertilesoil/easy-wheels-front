import { create } from "zustand";


type MenuState = {
  isOpen: boolean;
  setOpen: () => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  isOpen: false,
  setOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));