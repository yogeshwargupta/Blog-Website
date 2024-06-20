import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
        updatePost: (state, action) => {
            const { id, updatedPost } = action.payload;
            const index = state.posts.findIndex(post => post.id === id);
            if (index !== -1) {
                state.posts[index] = { ...state.posts[index], ...updatedPost };
            }
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload.id);
        },
        fetchPostsStart: (state) => {
            state.status = 'loading';
        },
        fetchPostsSuccess: (state, action) => {
            state.status = 'succeeded';
            state.posts = action.payload;
        },
        fetchPostsFailure: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        }
    }
});

export const { addPost, updatePost, deletePost, fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } = postSlice.actions;

export default postSlice.reducer;
