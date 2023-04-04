import { create } from "zustand";

export const usePosts = create((set) => ({
  posts: [],
  setPosts: (data) => set(() => ({ posts: data })),
}));

export const useSignUp = create((set) => ({
  isClickedSignUp: false,
  setIsClickedSignUp: () => set(() => ({ isClickedSignUp: true })),
}));

export const useModal = create((set) => ({
  modalOpen: false,
  setModalOpen: (boolean) => set(() => ({ modalOpen: boolean })),
}));

// import { create } from "zustand";

// const useBearStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
// }));
