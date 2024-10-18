import { create } from "zustand";

const useUserProfileStore = create((set) => ({
    userProfile:null,
    setUserProfile:(userProfile) => set({userProfile}),
    // erhöht den Post count im Profil
    addPost: (post) =>
		set((state) => ({
			userProfile: { ...state.userProfile, posts: [post.id, ...state.userProfile.posts] },
		})),
    // senkt den Post count im Profil
    deletePost: (postId) =>
        set((state) => ({
            userProfile: {
                ...state.userProfile,
                posts: state.userProfile.posts.filter((id) => id !== postId),
            },
        })),
}))

export default useUserProfileStore;