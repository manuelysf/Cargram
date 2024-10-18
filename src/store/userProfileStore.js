import { create } from "zustand";

const useUserProfileStore = create((set) => ({
    userProfile:null,
    setUserProfile:(userProfile) => set({userProfile}),
    // erhöht den Post count im Profil
    addPost: (post) =>
		set((state) => ({
			userProfile: { ...state.userProfile, posts: [post.id, ...state.userProfile.posts] },
		})),
}))

export default useUserProfileStore;