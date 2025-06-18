import { create } from "zustand";

type GlobalUiStore = {
  searchBarFocused: boolean;
  setSearchBarFocused: (focused: boolean) => void;
};

const useGlobalUiStore = create<GlobalUiStore>((set) => ({
  searchBarFocused: false,
  setSearchBarFocused: (focused) => set({ searchBarFocused: focused }),
}));

export default useGlobalUiStore;
