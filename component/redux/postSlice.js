import { createSlice } from "@reduxjs/toolkit";
import dataPost from "./data";
import { View } from "react-native";
const data = [];

await fetch("https://6554c20c63cafc694fe6e77d.mockapi.io/post", {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((tasks) => {
      data.push(tasks);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
console.log('data',data);
// const fetchData = async() =>{
//     const api = await fetch('https://6554c20c63cafc694fe6e77d.mockapi.io/post')
//     const jsonData = await api.json();
//     // data.push(JSON.stringify(jsonData));
// //     jsonData.map((item, index)=>{
// //        console.log(item);
// //        console.log('data',JSON.stringify(item));
// // })
// }
// // data.push(fetchData())
// fetchData()

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    data,
  },
  reducers: {
    addPost: function (state, action) {
      state.data.push(action.payload);
      console.log(action);
    },
    deletePost: function (state, action) {
      state.data = state.data.filter((items) => items.id != action.payload.id);
    },
    updatePost: function (state, action) {
      state.data.map((item) => {
        if (item.id == action.payload.id) {
          (item.title = action.payload.title),
            (item.amount = action.payload.amount);
        }
      });
    },
  },
});
export const { addPost, deletePost, updatePost } = postSlice.actions;
export const selectCount = (state) => state.posts.data;
export default postSlice.reducer;
