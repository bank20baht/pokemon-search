import { create } from "zustand";

type Store = {
  searchValue: string;
  setSearchValue: (newValue: string) => void;
};

const useStore = create<Store>((set) => ({
  searchValue: "",
  setSearchValue: (newValue: string) => set({ searchValue: newValue }),
}));

export default useStore;
