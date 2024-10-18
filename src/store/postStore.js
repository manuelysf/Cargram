import { create } from "zustand";

const usePostStore = create((set) => ({
    posts:[],
    // nimmt neuen Post und üerbschreibt die alte state mit einer neuen state wo der neue Post an erster stelle steht im Array
    createPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
    //deletePost
    //addComment
    setPosts: (posts) => set({posts}),
}))

export default usePostStore;