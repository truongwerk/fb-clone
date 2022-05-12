import create from "zustand";

// const useStore = create((set) => ({
// 	bears: 0,
// 	increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
// 	removeAllBears: () => set({ bears: 0 }),
// 	addBear: (value) => set((state) => ({ bears: state.bears + value })),
// }));

// export default useStore;

const useUser = create((set) => ({
	user: null,
	userLogin: (login) =>
		set(() => ({
			user: login,
		})),
}));

export default useUser;
