import { create } from "zustand";

const usePostStore = create((set) => ({
    posts:[],
    // nimmt neuen Post und üerbschreibt die alte state mit einer neuen state wo der neue Post an erster stelle steht im Array
    createPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
    deletePost: (id) => set(state => ({posts: state.posts.filter(post => post.id !== id)})),
    setPosts: (posts) => set({posts}),
    addComment: (postId, comment) =>
		set((state) => ({
			posts: state.posts.map((post) => { //durchsucht alle Posts nach der postId
				if (post.id === postId) {
					return {
						...post,
						comments: [...post.comments, comment], //update in diesem Post nur comment field und fügts am ende hinzu
					};
				}
				return post; // gibt die anderen posts unverändert zrk
			}),
		})),
}))

export default usePostStore;