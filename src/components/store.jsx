import { create } from "zustand";

export const usePosts = create((set) => ({
  posts: ["Hello"],
  setPosts: (newArr) => set((state) => ({ posts: newArr })),
}));

// import { create } from "zustand";

// const useBearStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
// }));
