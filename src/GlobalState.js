import create from "zustand";

// Create global state
//user: value,
//userLogin:change value method

const useUser = create((set) => ({
	user: null,
	userLogin: (login) =>
		set(() => ({
			user: login,
		})),
}));

export default useUser;
