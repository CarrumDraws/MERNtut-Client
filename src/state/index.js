import { createSlice } from "@reduxjs/toolkit";

let dev = "http://localhost:3001";
let prod = "https://carrums-merntut-server.onrender.com";

// STORE: The state that is stored in our global state- accessible throughout whole app.
const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [], // Current posts to be shown. In practice, swaps between "all" posts and "user" posts.
  url: process.env.NODE_ENV === "development" ? dev : prod,
};
console.log(process.env.NODE_ENV);
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // Sets Darkmode/Lightmode
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    // Sets User and JWTToken
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    // Removes User and JWTToken
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    // Sets Friends of User to Payload
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("User Friends non existant");
      }
    },
    // Set Posts Array to Payload
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    // Replaces Post in Posts Array (Used for liking/unliking)
    setPost: (state, action) => {
      // If post that is passed in's ID matches the ID of a post currently on screen, replace the post. Else, dont change the post.
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      // Then, push the changes to state.
      state.posts = updatedPosts;
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions; // Export Reducers
export default authSlice.reducer; // Export Values
