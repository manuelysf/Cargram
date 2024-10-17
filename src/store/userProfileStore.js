import { create } from "zustand";

const useUserProfileStore = create((set) => ({
    userProfile:null,
    setUserProfile:(userProfile) => set({userProfile}),
    // nimmt neuen Post und üerbschreibt die alte state mit einer neuen state wo der neue Post an erster stelle steht im Array
    addPost:(post) => set(state => ({
        userProfile:{...state.userProfile,posts:[post.id,...state.userProfile.posts]}
    }))
}))

export default useUserProfileStore;